"""
Fix portfolio pagination: move page-2 items inside the loop-container grid.

In portfolio.html / portfolio-es.html the page-2 loop items were dumped
AFTER the </div> that closes elementor-loop-container, so they fall outside
the CSS grid and are never found by the JS paginator.

Correct structure:
  <div class="elementor-loop-container elementor-grid">
    [all 12 e-loop-items]          <- page 1 + page 2
    <nav id="portfolio-pagination"> <- JS-driven pagination
  </div>
  [7 outer closing divs]
  <div data-elementor-type="footer">
"""
import re, sys

PAIRS = [
    ('portfolio.html',           'portfolio.html'),
    ('portfolio/index.html',     'portfolio/index.html'),
    ('portfolio-es.html',        'portfolio-es.html'),
    ('es/portfolio-es/index.html', 'es/portfolio-es/index.html'),
]

# ── JS pagination block (single copy, no duplicate) ──────────────────────────
JS_EN = """
<script>
(function () {
  var PER_PAGE = 6, cur = 1;
  function items() { return Array.from(document.querySelectorAll('.elementor-loop-container .e-loop-item')); }
  function go(page) {
    var all = items(), total = Math.ceil(all.length / PER_PAGE);
    cur = Math.max(1, Math.min(page, total));
    all.forEach(function(el, i) { el.style.display = (i >= (cur-1)*PER_PAGE && i < cur*PER_PAGE) ? '' : 'none'; });
    var prev = document.getElementById('portfolio-prev');
    var next = document.getElementById('portfolio-next');
    var pg1  = document.getElementById('portfolio-pg-1');
    var pg2  = document.getElementById('portfolio-pg-2');
    if (prev) prev.style.visibility = cur === 1     ? 'hidden' : 'visible';
    if (next) next.style.visibility = cur === total ? 'hidden' : 'visible';
    [pg1, pg2].forEach(function(el, i) {
      if (!el) return;
      var active = cur === i+1;
      el.className = active ? 'page-numbers current' : 'page-numbers';
      if (active) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current');
    });
  }
  window.portfolioPaginate = go;
  document.addEventListener('DOMContentLoaded', function() { go(1); });
})();
</script>
"""

JS_ES = """
<script>
(function () {
  var PER_PAGE = 6, cur = 1;
  function items() { return Array.from(document.querySelectorAll('.elementor-loop-container .e-loop-item')); }
  function go(page) {
    var all = items(), total = Math.ceil(all.length / PER_PAGE);
    cur = Math.max(1, Math.min(page, total));
    all.forEach(function(el, i) { el.style.display = (i >= (cur-1)*PER_PAGE && i < cur*PER_PAGE) ? '' : 'none'; });
    var prev = document.getElementById('portfolio-prev');
    var next = document.getElementById('portfolio-next');
    var pg1  = document.getElementById('portfolio-pg-1');
    var pg2  = document.getElementById('portfolio-pg-2');
    if (prev) prev.style.visibility = cur === 1     ? 'hidden' : 'visible';
    if (next) next.style.visibility = cur === total ? 'hidden' : 'visible';
    [pg1, pg2].forEach(function(el, i) {
      if (!el) return;
      var active = cur === i+1;
      el.className = active ? 'page-numbers current' : 'page-numbers';
      if (active) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current');
    });
  }
  window.portfolioPaginate = go;
  document.addEventListener('DOMContentLoaded', function() { go(1); });
})();
</script>
"""

NAV_EN = """				<nav class="elementor-pagination" id="portfolio-pagination" aria-label="Pagination" style="margin-top:40px;text-align:center;">
					<span class="page-numbers prev" id="portfolio-prev" onclick="portfolioPaginate(1)" style="cursor:pointer;">Previous</span>
					<span id="portfolio-pg-1" aria-current="page" class="page-numbers current" onclick="portfolioPaginate(1)" style="cursor:pointer;"><span class="elementor-screen-only">Page</span>1</span>
					<span id="portfolio-pg-2" class="page-numbers" onclick="portfolioPaginate(2)" style="cursor:pointer;"><span class="elementor-screen-only">Page</span>2</span>
					<span class="page-numbers next" id="portfolio-next" onclick="portfolioPaginate(2)" style="cursor:pointer;">Next</span>
				</nav>"""

NAV_ES = """				<nav class="elementor-pagination" id="portfolio-pagination" aria-label="Pagination" style="margin-top:40px;text-align:center;">
					<span class="page-numbers prev" id="portfolio-prev" onclick="portfolioPaginate(1)" style="cursor:pointer;">Anterior</span>
					<span id="portfolio-pg-1" aria-current="page" class="page-numbers current" onclick="portfolioPaginate(1)" style="cursor:pointer;"><span class="elementor-screen-only">Página</span>1</span>
					<span id="portfolio-pg-2" class="page-numbers" onclick="portfolioPaginate(2)" style="cursor:pointer;"><span class="elementor-screen-only">Página</span>2</span>
					<span class="page-numbers next" id="portfolio-next" onclick="portfolioPaginate(2)" style="cursor:pointer;">Siguiente</span>
				</nav>"""


def fix(path, is_spanish):
    print(f'\nProcessing: {path}')
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    loop_open  = '<div class="elementor-loop-container elementor-grid"'
    footer_marker = '<div data-elementor-type="footer"'

    loop_start = html.find(loop_open)
    if loop_start == -1:
        print('  ERROR: loop-container not found'); return

    footer_pos = html.find(footer_marker)
    if footer_pos == -1:
        print('  ERROR: footer not found'); return

    # ── Find ALL e-loop-items in the whole pre-footer section ─────────────────
    pre_footer = html[:footer_pos]
    item_pattern = re.compile(r'<div[^>]+\be-loop-item\b[^>]*>', re.DOTALL)

    # Find closing </div> of elementor-loop-container by counting divs from its open
    # We will rebuild the section from loop_start to footer_pos
    section = pre_footer[loop_start:]

    # Collect every e-loop-item start position (relative to section start)
    item_starts = [m.start() for m in re.finditer(r'<div[^>]+\be-loop-item\b', section)]
    if not item_starts:
        print('  ERROR: no e-loop-items found'); return
    print(f'  Found {len(item_starts)} e-loop-item(s)')

    # Extract each full e-loop-item by div-counting
    def extract_item(text, start):
        """Return (item_html, end_pos) where end_pos is after the item's closing div."""
        depth = 0
        i = start
        while i < len(text):
            if text[i:i+4] == '<div':
                depth += 1
                i = text.find('>', i) + 1
            elif text[i:i+6] == '</div>':
                depth -= 1
                i += 6
                if depth == 0:
                    return text[start:i], i
            else:
                i += 1
        return text[start:], len(text)

    items_html = []
    for s in item_starts:
        item, _ = extract_item(section, s)
        items_html.append(item.strip())

    print(f'  Extracted {len(items_html)} items')

    # ── Find the opening tag of the loop-container (full tag) ─────────────────
    lc_tag_end = html.find('>', loop_start) + 1   # end of opening <div ...>
    # The style tag and items start here; rebuild loop-container content
    # Find content BETWEEN loop_open tag end and the first e-loop-item
    first_item_abs = loop_start + item_starts[0]
    prefix_in_lc = html[lc_tag_end:first_item_abs]  # e.g. <style>...</style>

    # ── Find the nav & JS blocks that may already exist ───────────────────────
    # We'll strip ALL existing nav#portfolio-pagination and duplicate JS
    nav = NAV_ES if is_spanish else NAV_EN
    js  = JS_ES  if is_spanish else JS_EN

    # ── Find the 7 outer closing divs + anything between loop-container ───────
    # and footer that is NOT items/nav/js (the structural closing divs)
    # In portfolio/index.html these are exactly 7 </div> lines after the nav.
    # We'll grab them from the section AFTER the last item ends.

    # Locate last item end position in the full html
    last_item_start_in_section = item_starts[-1]
    _, last_item_end_in_section = extract_item(section, last_item_start_in_section)
    last_item_end_abs = loop_start + last_item_end_in_section

    # Everything from last_item_end to footer is: closing div of loop-container
    # + any leftover closing divs for widget-container, widget, e-con-inner, etc.
    tail = html[last_item_end_abs:footer_pos]

    # Strip out any existing nav and script blocks from tail
    tail = re.sub(r'<nav[^>]*id="portfolio-pagination"[^>]*>.*?</nav>', '', tail, flags=re.DOTALL)
    tail = re.sub(r'<div class="e-load-more-anchor"[^>]*/>', '', tail)
    tail = re.sub(r'<div class="e-load-more-anchor"[^>]*></div>', '', tail)
    tail = re.sub(r'<script>.*?</script>', '', tail, flags=re.DOTALL)
    # Remove existing link-based pagination
    tail = re.sub(r'<nav class="elementor-pagination"[^>]*>.*?</nav>', '', tail, flags=re.DOTALL)

    # The tail now has only closing </div> tags (structural). Clean whitespace.
    # These are the divs that close: loop-container + widget-container + widget + outer containers
    # We need EXACTLY one loop-container close here (the others were already there).
    # Count how many </div> are in the tail vs what's needed.
    # In portfolio/index.html, after the nav there are 7 </div> lines before footer.
    # We want the same 7 here. The loop-container close is the first one.

    # Just keep the tail as-is (stripped of nav/script) - it already has the right divs.
    tail_clean = tail.strip()

    # ── Rebuild the full HTML ─────────────────────────────────────────────────
    before_loop = html[:loop_start]
    after_footer = html[footer_pos:]

    loop_container_open = html[loop_start:lc_tag_end]

    new_section = (
        loop_container_open + '\n' +
        prefix_in_lc +
        '\n'.join(items_html) + '\n' +
        nav + '\n' +
        '</div>\n' +          # close loop-container
        tail_clean + '\n'
    )

    new_html = before_loop + new_section + after_footer

    # Remove any leftover duplicate JS scripts in the whole page
    new_html = re.sub(r'<script>\s*\(function\s*\(\)\s*\{[^}]*var ITEMS_PER_PAGE.*?\}\)\(\);\s*</script>', '', new_html, flags=re.DOTALL)
    new_html = re.sub(r'<script>\s*\(function\s*\(\)\s*\{[^}]*var PER_PAGE.*?\}\)\(\);\s*</script>', '', new_html, flags=re.DOTALL)

    # Inject single clean JS before </body>
    new_html = new_html.replace('</body>', js + '\n</body>', 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print(f'  Done -> {path}')


fix('portfolio.html',           is_spanish=False)
fix('portfolio/index.html',     is_spanish=False)
fix('portfolio-es.html',        is_spanish=True)
fix('es/portfolio-es/index.html', is_spanish=True)

print('\nAll done.')
