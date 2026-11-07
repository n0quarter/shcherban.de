# /// script
# dependencies = ["beautifulsoup4", "markdownify"]
# ///
"""Convert the saved HTML of the old WordPress/Divi site into Markdown files.

Input:  old-site/html/**.html  (one file per old URL)
Output: content/**.md          (same page structure, one Markdown file per page)

Run: uv run scripts/extract_old_site.py
"""

import json
import re
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify

ROOT = Path(__file__).resolve().parent.parent
HTML_DIR = ROOT / "old-site" / "html"
CONTENT_DIR = ROOT / "content"
POST_PATH = re.compile(r"^(\d{4})/(\d{2})/(\d{2})/(.+)$")
SECTION_MARK = "<!-- section -->"


def to_markdown(element) -> str:
    md = markdownify(str(element), heading_style="ATX", bullets="-", newline_style="BACKSLASH", strip=["script", "style", "svg"])
    md = md.replace("­", "")  # soft hyphens used for word breaking on the old site
    md = re.sub(r"[ \t ]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


def frontmatter(fields: dict) -> str:
    lines = [f"{key}: {json.dumps(value, ensure_ascii=False)}" for key, value in fields.items() if value]
    return "---\n" + "\n".join(lines) + "\n---\n\n"


def clean_divi_markup(soup) -> None:
    """Drop icon-font glyphs and restore card links that Divi only adds via JavaScript."""
    for icon in soup.select(".et-pb-icon, .et_pb_main_blurb_image"):
        if not icon.find("img"):
            icon.decompose()

    link_data = re.search(r"et_link_options_data = (\[.*?\]);", str(soup))
    for link in json.loads(link_data.group(1)) if link_data else []:
        module = soup.select_one(f".{link['class']}")
        heading = module and module.find(re.compile(r"^h[1-6]$"))
        if heading and not heading.find("a"):
            anchor = soup.new_tag("a", href=link["url"])
            anchor.extend(list(heading.contents))
            heading.append(anchor)


def page_meta(soup, old_url: str) -> dict:
    description = soup.find("meta", attrs={"name": "description"})
    title = soup.select_one("h1") or soup.title
    return {
        "title": title.get_text(" ", strip=True).replace("­", ""),
        "old_url": old_url,
        "lang": soup.html.get("lang"),
        "description": description["content"] if description else None,
    }


def page_body(main) -> str:
    sections = [s for s in main.select(".et_pb_section") if "tb_footer" not in " ".join(s["class"])]
    if not sections:
        return to_markdown(main.select_one(".entry-content") or main)
    return f"\n\n{SECTION_MARK}\n\n".join(to_markdown(s) for s in sections)


def post_body(main) -> str:
    article = main.select_one("article")
    for noise in article.select(".post-meta, .et_post_meta_wrapper h1, #comment-wrap, .comment-respond"):
        noise.decompose()
    return to_markdown(article.select_one(".entry-content") or article)


def convert(html_file: Path) -> None:
    relative = html_file.relative_to(HTML_DIR).with_suffix("")
    url_path = "" if relative.as_posix() == "index" else relative.as_posix().removesuffix("/index") + "/"
    old_url = f"https://shcherban.de/{url_path}"
    soup = BeautifulSoup(html_file.read_text(), "html.parser")
    clean_divi_markup(soup)
    main = soup.select_one("#main-content")
    meta = page_meta(soup, old_url)

    post = POST_PATH.match(relative.as_posix())
    if post:
        year, month, day, slug = post.groups()
        meta["date"] = f"{year}-{month}-{day}"
        target = CONTENT_DIR / "posts" / f"{year}-{month}-{day}-{slug}.md"
        body = post_body(main)
    else:
        target = CONTENT_DIR / relative.with_suffix(".md")
        body = page_body(main)

    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(frontmatter(meta) + body + "\n")
    print(f"{old_url} -> {target.relative_to(ROOT)}")


def extract_shared(home_html: Path) -> None:
    soup = BeautifulSoup(home_html.read_text(), "html.parser")
    clean_divi_markup(soup)
    menu =[f"- [{a.get_text(strip=True)}]({a['href']})" for a in soup.select("#top-menu-nav a")]
    shared = CONTENT_DIR / "_shared"
    shared.mkdir(parents=True, exist_ok=True)
    (shared / "navigation.md").write_text("# Navigation\n\n" + "\n".join(menu) + "\n")
    for lang in ["de", "en"]:
        footer = soup.select_one(f".footer-{lang}")
        (shared / f"footer.{lang}.md").write_text(to_markdown(footer) + "\n")
    print("navigation + footers -> content/_shared/")


if __name__ == "__main__":
    for html_file in sorted(HTML_DIR.rglob("*.html")):
        convert(html_file)
    extract_shared(HTML_DIR / "index.html")
