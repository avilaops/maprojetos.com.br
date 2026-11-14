"""Verifica o HTML real das URLs indexáveis do sitemap, sem rede."""
import argparse
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.meta = {}
        self.canonicals = []
        self.title = ''
        self.in_title = False
        self.h1 = 0
        self.robots = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title':
            self.in_title = True
        if tag == 'h1':
            self.h1 += 1
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'meta':
            name = attrs.get('property', attrs.get('name', ''))
            self.meta[name] = attrs.get('content', '')
            if name in ('robots', 'googlebot'):
                self.robots.append(attrs.get('content', ''))

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('directory', type=Path)
parser.add_argument('--expected-routes', type=int)
parser.add_argument('--text', action='store_true', help='Confere também .md e .mdx gerados.')
args = parser.parse_args()
root = args.directory.resolve()
tree = ElementTree.parse(root / 'sitemap.xml')
urls = [node.text for node in tree.findall('.//{*}loc')]
errors = []
titles = set()
descriptions = set()
if args.expected_routes is not None and len(urls) != args.expected_routes:
    errors.append(f'Sitemap: esperadas {args.expected_routes} URLs, recebido {len(urls)}.')
if len(set(urls)) != len(urls):
    errors.append('Sitemap com URLs repetidas.')

for url in urls:
    route = unquote(urlsplit(url).path).lstrip('/')
    file = (root / route / 'index.html').resolve()
    if root not in file.parents or not file.is_file():
        errors.append(f'{url}: HTML correspondente ausente')
        continue
    page = Page()
    page.feed(file.read_text(encoding='utf-8'))
    description = page.meta.get('description')
    for label, actual, expected in [
        ('canonical', page.canonicals, [url]),
        ('og:url', page.meta.get('og:url'), url),
        ('og:title', page.meta.get('og:title'), page.title),
        ('twitter:title', page.meta.get('twitter:title'), page.title),
        ('og:description', page.meta.get('og:description'), description),
        ('twitter:description', page.meta.get('twitter:description'), description),
    ]:
        if not actual or actual != expected:
            errors.append(f'{url}: {label} divergente')
    if not page.title or page.title in titles:
        errors.append(f'{url}: título ausente ou repetido')
    if not description or description in descriptions:
        errors.append(f'{url}: descrição ausente ou repetida')
    titles.add(page.title)
    descriptions.add(description)
    if not page.meta.get('og:image') or not page.meta.get('twitter:image'):
        errors.append(f'{url}: imagem da prévia ausente')
    if page.h1 != 1:
        errors.append(f'{url}: esperado um h1, recebido {page.h1}')
    if any('noindex' in value.lower() or value.lower().strip() == 'none' for value in page.robots):
        errors.append(f'{url}: noindex não pode estar no sitemap')
    if args.text:
        for extension in ('md', 'mdx'):
            text_file = file.with_suffix(f'.{extension}')
            if not text_file.is_file():
                errors.append(f'{url}: cópia .{extension} ausente')
                continue
            # O publicador serializa os valores escalares em strings JSON no YAML.
            content = text_file.read_text(encoding='utf-8').split('---', 2)
            frontmatter = dict(line.split(': ', 1) for line in content[1].splitlines() if ': ' in line) if len(content) == 3 else {}
            for key, expected in [('canonical', url), ('title', page.title), ('description', description)]:
                try:
                    actual = json.loads(frontmatter.get(key, 'null'))
                except json.JSONDecodeError:
                    actual = None
                if actual != expected:
                    errors.append(f'{url}: .{extension} {key} divergente')

if not urls:
    errors.append('Sitemap sem URLs.')
if errors:
    print('\n'.join(errors), file=sys.stderr)
    raise SystemExit(1)
print(f'SEO verificado em {len(urls)} páginas: canonical, título, prévias, h1 e indexação' + ('; MDX e Markdown conferidos.' if args.text else '.'))
