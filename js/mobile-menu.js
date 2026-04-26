/**
 * mobile-menu.js
 * Two fixes for the static Elementor export:
 *  1. Mobile popup menu — Elementor Pro popup JS chunks are missing, so the
 *     hamburger button does nothing. This script intercepts the click and
 *     shows the popup directly as a fullscreen overlay.
 *  2. Language-switcher chevron — Font Awesome webfonts (/webfonts/) were not
 *     included in the WordPress export. Inject a CSS fallback that renders the
 *     chevron using a Unicode triangle so the rotateX open/close animation
 *     still works correctly.
 */
(function () {
  'use strict';

  // ── 1. Chevron fallback (Font Awesome webfonts missing) ──────────────────
  var chevronCSS = [
    /* hide the broken glyph but keep the element (animation target) */
    '.cpel-switcher__icon.fas.fa-chevron-down{',
    '  font-size:0!important;',
    '  display:inline-block!important;',
    '  vertical-align:middle;',
    '  margin-left:5px;',
    '  line-height:1;',
    '}',
    /* render a real chevron via ::before so rotateX flips it on open */
    '.cpel-switcher__icon.fas.fa-chevron-down::before{',
    '  content:"\\25BE";',   /* ▾ BLACK DOWN-POINTING SMALL TRIANGLE */
    '  font-size:13px;',
    '  font-family:inherit!important;',
    '  display:inline-block;',
    '}'
  ].join('');
  var s = document.createElement('style');
  s.textContent = chevronCSS;
  document.head.appendChild(s);

  // ── 2. Mobile popup (Elementor Pro popup chunks not in static export) ─────
  document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('[data-elementor-type="popup"]');
    if (!popup) return;

    /* Remove elementor-invisible inside popup so content shows when overlay opens */
    popup.querySelectorAll('.elementor-invisible').forEach(function (el) {
      el.classList.remove('elementor-invisible');
    });

    /* Inject overlay CSS via a class toggle to avoid fighting Elementor's inline styles */
    var overlayCss = document.createElement('style');
    overlayCss.textContent = [
      '[data-elementor-type="popup"].zc-menu-open{',
      '  display:block!important;',
      '  position:fixed!important;',
      '  inset:0!important;',
      '  z-index:99999!important;',
      '  background:rgba(0,0,6,0.97)!important;',
      '  overflow-y:auto!important;',
      '}',
      '[data-elementor-type="popup"].zc-menu-open .e-con-boxed{',
      '  max-width:100%!important;',
      '  width:100%!important;',
      '  padding:64px 32px 40px!important;',
      '}',
      '[data-elementor-type="popup"].zc-menu-open .e-con-inner{',
      '  display:flex;flex-direction:column;gap:32px;align-items:flex-start;',
      '}',
      /* Nav links — large and readable */
      '[data-elementor-type="popup"].zc-menu-open .elementor-nav-menu a{',
      '  font-size:22px!important;',
      '  padding:10px 0!important;',
      '  display:block;',
      '}',
      /* Hide the second (duplicate dropdown) nav inside the popup */
      '[data-elementor-type="popup"].zc-menu-open .elementor-nav-menu--dropdown{',
      '  display:none!important;',
      '}'
    ].join('');
    document.head.appendChild(overlayCss);

    /* Close button */
    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.style.cssText = [
      'position:fixed;top:16px;right:20px;',
      'background:none;border:none;',
      'color:rgba(255,255,255,0.6);',
      'font-size:32px;cursor:pointer;',
      'z-index:100001;padding:6px 10px;line-height:1;',
      'transition:color .2s;'
    ].join('');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('mouseover', function () { this.style.color = '#fff'; });
    closeBtn.addEventListener('mouseout',  function () { this.style.color = 'rgba(255,255,255,0.6)'; });
    popup.appendChild(closeBtn);

    var isOpen = false;

    function open() {
      popup.classList.add('zc-menu-open');
      document.body.style.overflow = 'hidden';
      isOpen = true;
    }

    function close() {
      popup.classList.remove('zc-menu-open');
      document.body.style.overflow = '';
      isOpen = false;
    }

    /* Hamburger triggers — Elementor encodes the href */
    document.querySelectorAll('a[href*="popup%3Aopen"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        isOpen ? close() : open();
      });
    });

    closeBtn.addEventListener('click', close);

    /* Backdrop click */
    popup.addEventListener('click', function (e) {
      if (e.target === popup) close();
    });

    /* Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) close();
    });
  });

})();
