/**
 * mobile-menu.js — Zerocode static site
 *
 * Fix 1: Mobile hamburger menu
 *   The Elementor Pro popup depends on a dynamic webpack chunk (n.e(519)) that
 *   was never included in the static export, so the hamburger does nothing.
 *   This script builds a self-contained overlay and intercepts the hamburger
 *   click directly — no Elementor popup machinery needed.
 *
 * Fix 2: Language-switcher chevron
 *   Font Awesome webfonts (/webfonts/) were not exported from WordPress.
 *   Render the chevron via a Unicode triangle that still flips correctly
 *   with the cpel-switcher's rotateX open/close animation.
 *
 * Fix 3: Elementor-invisible fallback
 *   On mobile, Elementor's scroll-animation IntersectionObserver can miss
 *   elements (e.g. loop-grid portfolio cards). We run a second observer so
 *   visibility:hidden is removed as soon as each element enters the viewport.
 */
(function () {
  'use strict';

  /* ── 1. Chevron fallback ─────────────────────────────────────────────── */
  var chevStyle = document.createElement('style');
  chevStyle.textContent =
    '.cpel-switcher__icon.fas.fa-chevron-down{' +
      'font-size:0!important;display:inline-block!important;' +
      'vertical-align:middle;margin-left:5px;line-height:1' +
    '}' +
    '.cpel-switcher__icon.fas.fa-chevron-down::before{' +
      'content:"▾";font-size:13px;' +
      'font-family:inherit!important;display:inline-block' +
    '}';
  document.head.appendChild(chevStyle);

  /* ── 2. elementor-invisible fallback (mobile only) ───────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window && window.matchMedia('(max-width:1024px)').matches) {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.remove('elementor-invisible');
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.01 });

      document.querySelectorAll('.elementor-invisible').forEach(function (el) {
        revealObs.observe(el);
      });
    }
  });

  /* ── 3. Mobile overlay (built from scratch — no Elementor popup) ─────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Hamburger: any link that triggers an Elementor popup open action */
    var hamburger = document.querySelector('a[href*="popup%3Aopen"]');
    if (!hamburger) return;

    var isEs   = document.documentElement.lang.startsWith('es');
    var isOpen = false;

    /* ── Build overlay ─────────────────────────────────────────────────── */
    var overlay = document.createElement('div');
    overlay.id  = 'zc-mobile-menu';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', isEs ? 'Menú de navegación' : 'Navigation menu');

    /* overlay shell */
    var overlayCSS = document.createElement('style');
    overlayCSS.textContent =
      '#zc-mobile-menu{' +
        'display:none;position:fixed;top:0;left:0;right:0;bottom:0;' +
        'z-index:99999;background:rgba(0,0,12,0.97);overflow-y:auto;' +
        'padding:72px 32px 48px;box-sizing:border-box;' +
      '}' +
      '#zc-mobile-menu ul{list-style:none;margin:0;padding:0}' +
      '#zc-mobile-menu ul li{border-bottom:1px solid rgba(255,255,255,0.07)}' +
      '#zc-mobile-menu ul a{' +
        'display:block;color:#fff;text-decoration:none;' +
        'font-family:"Space Grotesk","Helvetica Neue",system-ui,sans-serif;' +
        'font-size:22px;font-weight:600;letter-spacing:-0.3px;padding:14px 0;' +
      '}' +
      '#zc-mobile-menu ul .current-menu-item>a,' +
      '#zc-mobile-menu ul .current_page_item>a{color:#00DCFC}' +
      '#zc-mobile-menu ul a:hover{color:#00DCFC}' +
      '#zc-mobile-close{' +
        'position:fixed;top:14px;right:18px;background:none;border:none;' +
        'color:rgba(255,255,255,0.55);font-size:30px;cursor:pointer;' +
        'z-index:100001;padding:6px 10px;line-height:1;' +
      '}' +
      '#zc-mobile-close:hover{color:#fff}' +
      '#zc-mobile-menu .zc-mob-lang{margin-top:32px;border-top:1px solid rgba(255,255,255,0.07);padding-top:24px}' +
      /* Normalize language-switcher text sizes inside the overlay */
      '#zc-mobile-menu .zc-mob-lang a{' +
        'display:inline-flex;align-items:center;gap:6px;' +
        'color:rgba(255,255,255,0.7);text-decoration:none;' +
        'font-family:"Space Grotesk","Helvetica Neue",system-ui,sans-serif;' +
        'font-size:14px!important;font-weight:500;padding:4px 0;' +
      '}' +
      '#zc-mobile-menu .zc-mob-lang .cpel-switcher__code{font-size:14px!important;font-weight:600}' +
      '#zc-mobile-menu .zc-mob-lang .cpel-switcher__flag img{width:21px;height:15px;vertical-align:middle}' +
      '#zc-mobile-menu .zc-mob-lang .cpel-switcher__list{list-style:none;margin:4px 0 0;padding:0}' +
      '#zc-mobile-menu .zc-mob-lang .cpel-switcher__toggle{display:block}' +
      '#zc-mobile-menu .zc-mob-cta{' +
        'display:inline-block;margin-top:36px;' +
        'background:#00DCFC;color:#000;font-weight:700;' +
        'font-family:"Space Grotesk","Helvetica Neue",system-ui,sans-serif;' +
        'font-size:14px;padding:12px 28px;border-radius:50px;' +
        'text-decoration:none;letter-spacing:.04em;' +
      '}' +
      '#zc-mobile-menu .zc-mob-cta:hover{opacity:.85}';
    document.head.appendChild(overlayCSS);

    /* close button */
    var closeBtn = document.createElement('button');
    closeBtn.id        = 'zc-mobile-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', isEs ? 'Cerrar menú' : 'Close menu');
    overlay.appendChild(closeBtn);

    /* nav list — clone from the first nav-menu on the page (desktop header) */
    var srcMenu = document.querySelector(
      '[data-elementor-type="header"] .elementor-nav-menu:not([aria-hidden="true"])'
    );
    if (!srcMenu) {
      srcMenu = document.querySelector('.elementor-nav-menu');
    }
    if (srcMenu) {
      var ul = srcMenu.cloneNode(true);
      ul.removeAttribute('id');
      ul.removeAttribute('class');
      /* strip tabindex from cloned links */
      ul.querySelectorAll('[tabindex]').forEach(function (el) {
        el.removeAttribute('tabindex');
      });

      /* ── URL-based active state ─────────────────────────────────────── */
      /* Clear whatever WordPress stamped into the HTML and re-derive from
         the actual current URL so the right item is always highlighted. */
      ul.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('current-menu-item', 'current_page_item');
      });
      ul.querySelectorAll('a').forEach(function (a) {
        a.classList.remove('elementor-item-active');
        a.removeAttribute('aria-current');
      });

      var curPath = window.location.pathname.replace(/\/$/, '') || '/';
      var bestLink = null;
      var bestLen  = 0;

      ul.querySelectorAll('a[href]').forEach(function (a) {
        try {
          var linkPath = new URL(a.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
          /* Home ("/") should only win for the exact root path */
          if (linkPath === '/') {
            if (curPath === '/' && bestLen === 0) { bestLink = a; bestLen = 1; }
          } else if ((curPath + '/').startsWith(linkPath + '/') && linkPath.length > bestLen) {
            bestLink = a;
            bestLen  = linkPath.length;
          }
        } catch (e) {}
      });

      if (bestLink) {
        bestLink.classList.add('elementor-item-active');
        bestLink.setAttribute('aria-current', 'page');
        var parentLi = bestLink.closest('li');
        if (parentLi) parentLi.classList.add('current-menu-item', 'current_page_item');
      }

      overlay.appendChild(ul);
    }

    /* language switcher — clone from desktop header switcher */
    var srcLang = document.querySelector('[data-elementor-type="header"] .cpel-switcher__nav');
    if (srcLang) {
      var langWrap = document.createElement('div');
      langWrap.className = 'zc-mob-lang';
      langWrap.appendChild(srcLang.cloneNode(true));
      overlay.appendChild(langWrap);
    }

    /* CTA button */
    var cta       = document.createElement('a');
    cta.href      = isEs ? '/es/contact-es/' : '/contact/';
    cta.className = 'zc-mob-cta';
    cta.textContent = isEs ? 'Agenda una Llamada' : 'Schedule a Call';
    overlay.appendChild(cta);

    document.body.appendChild(overlay);

    /* ── Open / close ──────────────────────────────────────────────────── */
    function openMenu() {
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
      isOpen = true;
    }

    function closeMenu() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      hamburger.focus();
      isOpen = false;
    }

    /* Hamburger click — stopPropagation prevents Elementor's document handler */
    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    closeBtn.addEventListener('click', closeMenu);

    /* backdrop click */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeMenu();
    });

    /* Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeMenu();
    });

    /* close when a nav link inside the overlay is clicked */
    overlay.addEventListener('click', function (e) {
      var t = e.target;
      while (t && t !== overlay) {
        if (t.tagName === 'A' && t.href && !t.href.includes('#')) {
          closeMenu();
          break;
        }
        t = t.parentElement;
      }
    });

  });

})();
