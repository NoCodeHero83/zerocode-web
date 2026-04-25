"""
Fix contact-es.html:
  1. Replace wrong portfolio "single-post" section with proper Spanish contact content + Calendly
  2. Inject the missing video/"¡Conectemos!" block into the ES footer
  3. Add responsive banner CSS (clamp font-size) to ALL html pages
  4. Add responsive footer CSS to ALL html pages
"""

import glob, re

# ── 1. Spanish main-content block (mirrors contact.html wp-page section) ─────
PHONE_SVG = (
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
    'id="Capa_1" x="0px" y="0px" viewBox="0 0 473.806 473.806" '
    'style="enable-background:new 0 0 473.806 473.806;" xml:space="preserve"><g><g>'
    '<path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4'
    'l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75'
    'c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8c2.8-2.8,5.6-5.7,8.4-8.5'
    'c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6'
    'c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3'
    'c-12.8,12.8-20.1,28.4-21.7,46.5c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6'
    'c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26c2.1,0.1,4.3,0.2,6.3,0.2'
    'c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1'
    'c4.3-4.1,8.7-8.4,13-12.9c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3'
    'L374.456,293.506z"></path>'
    '<path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69'
    'c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2c7.4-1.2,12.3-8.2,11.1-15.6'
    'c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11'
    'S248.656,111.506,256.056,112.706z"></path>'
    '<path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3'
    'c-7.3-1.3-14.2,3.7-15.5,11c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7'
    'c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2'
    'C469.556,223.306,474.556,216.306,473.256,209.006z"></path>'
    '</g></g></svg>'
)

PHONE_ICON_B64 = (
    'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAEDElEQVRIiaVVW2xUVRRd'
    'a587w7RiKBhNEx+t+mGMHyZEIx8kba3RiMhDPowhaj/86MNAbVEwkbT1w1gediCBNtFYUImmItUQYuujFKOi'
    'kQ/84Q+cfpNAq7QznZlztznnzEybmAwm3Mx9zJnZ66y199r7Ev/j6PxyoVeJdwiphWB4pazYu28L/6kWGd0M'
    'tn0s26bAAceAgcaOBV0Ud68WJzcDJvFqAKU/hSRFXu8e17pbAoZiEVz64li7DxN2c7Uwn4ruUa1bSGZfAXQ1'
    'KZdJ/DzyUk3GMzZyntBnPKAIwACuqveVQRx7U4vHCdgLv+Kn6QEW2f55ttEW7VkYNni5UCfWXUeSt6d2Rzd'
    'QKEaLl5RopIhWGIvpTG80w29O6NqY9keCdRSCggyFLVK08W6lNpak0tMRQATtdiH3p85jBYGOco79KVSKXO'
    'qZ1Hst4q8A1PkNQ8oaodgl0Lg+BGB5KsMz2VBclRs//EJqAsLpQNWJ0pmhDTwHW+wi2eCUIKj09xh4jK+dm'
    'O8Tot/v5ph4RiW5S8+bIHKPEEe9XLBNjTlnaP9CRQHhK0Cv+5gkE/MHAR0F/drSviypCFXrESROMfjuo6GN'
    '0XFB/D0q/wlE3EWB2QIwUFHfMZZtgqLR+8+4qnNNZPQuFbOOgkcPb0qu6T5deG+Vid6/QXsU5HaPJlQjnpU'
    'CmIsV2w60cuo/Lf3yJ3rbytr8g0bwUMT4KpC6COTqhrakZkjqG2fyO2nMUKmOIQ3EHIST+Rz2pJ9lBstuuu'
    'uzbIOmdBckt13A1b4I3rcFUJJ7SA76uubtN6xNnJIEHmCMOyXCZS3gymAr55YT9Iw7x/5er4xOi0hdyTIIn'
    'vS2OhGL6YpQ7B3akOjrnSxeJ+Uiyd+EuErimqtaHnBuyKRbOO3jXYPQ4DwF9Us+9UVyEjNiE2sRFfppZGec'
    'NPWJon4BQXPJLd5Jzp02AEMF4+kmbGPnyeyoqrYFQN9Z5dwhb+39qaRpBuVj8evsEJEroE6W7ekoxK6Xg/3'
    'DXdDveuzhpa4qgRIwKh+ObK3JkNJXsR30xf1P8zsoppwiN5PiwNSxDowJjWM0setk7hCIHahU2G8wY41tTlh'
    'zByO5EJrCzQcHxs1M4g9R/BADj1h6UL+BDcCO+THJRnYQRCYMIE92rlC0bUeeq5mRyDyBsv9DtxKiwwUgt0'
    'isB3HEsdYSUw2bZGItNUifqlwft8+rscbEyan0Vs669Z4Juxeq7/pCufwH1u6n/n2tHPAj86w2xsBTMXA3DK'
    '5FFp+mWzhb9Z3X822xDcJy4VCWpOTv+5/kumqxVd8gccp8XX4thWFXnh1YqBZ3U2AnSYgPPGipsCUXHL8lYH'
    'fU/iJvxaqHCC24yQXi7YMtrA4M4F+6z4D/7Xz62QAAAABJRU5ErkJggg=='
)

PHONE_ICON_SVG = (
    f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
    f'width="24" height="24" viewBox="0 0 24 24">'
    f'<image x="1" width="22" height="24" xlink:href="{PHONE_ICON_B64}"></image></svg>'
)

MAIN_CONTENT_ES = f'''\t\t\t\t<div data-elementor-type="wp-page" data-elementor-id="5677" class="elementor elementor-5677" data-elementor-post-type="page">
\t\t\t\t<div class="elementor-element elementor-element-c437c30 e-flex e-con-boxed e-con e-parent" data-id="c437c30" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;}}">
\t\t\t\t\t<div class="e-con-inner">
\t\t\t\t<div class="elementor-element elementor-element-d68512f elementor-icon-list--layout-inline elementor-align-center gradient_border elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-id="d68512f" data-element_type="widget" data-settings="{{&quot;_animation&quot;:&quot;fadeInUp&quot;}}" data-widget_type="icon-list.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t\t\t<ul class="elementor-icon-list-items elementor-inline-items">
\t\t\t\t\t\t\t<li class="elementor-icon-list-item elementor-inline-item">
\t\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-icon">
\t\t\t\t\t\t\t{PHONE_ICON_SVG}\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Consulta Gratuita</span>
\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="elementor-element elementor-element-99f0b31 elementor-invisible elementor-widget elementor-widget-heading" data-id="99f0b31" data-element_type="widget" data-settings="{{&quot;_animation&quot;:&quot;fadeInUp&quot;}}" data-widget_type="heading.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t<h2 class="elementor-heading-title elementor-size-default">De Cero a Ingresos - la soluci&#243;n operacional</h2>\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="elementor-element elementor-element-adeccfc elementor-invisible elementor-widget elementor-widget-text-editor" data-id="adeccfc" data-element_type="widget" data-settings="{{&quot;_animation&quot;:&quot;fadeInUp&quot;}}" data-widget_type="text-editor.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t\t\t\t\t\t<p><em>En esta llamada vamos a:</em></p>
<ul>
<li><em>Identificar el cuello de botella que est&#225; limitando tus ingresos ahora mismo</em></li>
<li><em>Decirte honestamente si una plataforma digital es la soluci&#243;n correcta o no</em></li>
<li><em>Mostrarte exactamente c&#243;mo ser&#237;a la Fase 1 para tu operaci&#243;n espec&#237;fica</em></li>
</ul>\t\t\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t<div class="elementor-element elementor-element-71ed608 e-con-full e-flex elementor-invisible e-con e-child" data-id="71ed608" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}}">
\t\t\t\t<div class="elementor-element elementor-element-ad1959f elementor-widget elementor-widget-html" data-id="ad1959f" data-element_type="widget" data-widget_type="html.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t<div class="calendly-inline-widget" data-url="https://calendly.com/andres-diaz-/discoverycall?hide_gdpr_banner=1&amp;locale=es" style="min-width:280px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t</div>
'''

# ── 2. Video / "¡Conectemos!" block to inject at top of ES footer inner ───────
VIDEO_CONNECT_ES = '''\t\t<div class="elementor-element elementor-element-1c2f5fa e-con-full e-flex e-con e-child" data-id="1c2f5fa" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
\t\t\t\t<div class="elementor-element elementor-element-9d4dacb elementor-widget__width-initial elementor-widget elementor-widget-video" data-id="9d4dacb" data-element_type="widget" data-settings="{&quot;video_type&quot;:&quot;hosted&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;play_on_mobile&quot;:&quot;yes&quot;,&quot;mute&quot;:&quot;yes&quot;,&quot;loop&quot;:&quot;yes&quot;}" data-widget_type="video.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t\t\t<div class="e-hosted-video elementor-wrapper elementor-open-inline">
\t\t\t\t\t<video class="elementor-video" src="https://zerocode.la/wp-content/uploads/2025/06/5869295_Indoors_Day_1280x720-1.mp4" autoplay="" loop="" muted="muted" playsinline="" controlsList="nodownload"></video>
\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t<div class="elementor-element elementor-element-1aa8bd3 e-con-full e-flex e-con e-child" data-id="1aa8bd3" data-element_type="container">
\t\t\t\t<div class="elementor-element elementor-element-777475e elementor-icon-list--layout-inline elementor-align-center gradient_border elementor-list-item-link-full_width elementor-invisible elementor-widget elementor-widget-icon-list" data-id="777475e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="icon-list.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t\t\t<ul class="elementor-icon-list-items elementor-inline-items">
\t\t\t\t\t\t\t<li class="elementor-icon-list-item elementor-inline-item">
\t\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-icon">
\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><image x="1" width="22" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAEDElEQVRIiaVVW2xUVRRda587w7RiKBhNEx+t+mGMHyZEIx8kba3RiMhDPowhaj/86MNAbVEwkbT1w1gediCBNtFYUImmItUQYuujFKOikQ/84Q+cfpNAq7QznZlztznnzEybmAwm3Mx9zJnZ66y199r7Ev/j6PxyoVeJdwiphWB4pazYu28L/6kWGd0Mtn0s26bAAceAgcaOBV0Ud68WJzcDJvFqAKU/hSRFXu8e17pbAoZiEVz64li7DxN2c7Uwn4ruUa1bSGZfAXQ1KZdJ/DzyUk3GMzZyntBnPKAIwACuqveVQRx7U4vHCdgLv+Kn6QEW2f55ttEW7VkYNni5UCfWXUeSt6d2RzdQKEaLl5RopIhWGIvpTG80w29O6NqY9keCdRSCggyFLVK08W6lNpak0tMRQATtdiH3p85jBYGOco79KVSKXOqZ1Hst4q8A1PkNQ8oaodgl0Lg+BGB5KsMz2VBclRs//EJqAsLpQNWJ0pmhDTwHW+wi2eCUIKj09xh4jK+dmO8Tot/v5ph4RiW5S8+bIHKPEEe9XLBNjTlnaP9CRQHhK0Cv+5gkE/MHAR0F/drSviypCFXrESROMfjuo6GN0XFB/D0q/wlE3EWB2QIwUFHfMZZtgqLR+8+4qnNNZPQuFbOOgkcPb0qu6T5deG+Vid6/QXsU5HaPJlQjnpUCmIsV2w60cuo/Lf3yJ3rbytr8g0bwUMT4KpC6COTqhrakZkjqG2fyO2nMUKmOIQ3EHIST+Rz2pJ9lBstbuuuzbIOmdBckt13A1b4I3rcFUJJ7SA76uubtN6xNnJIEHmCMOyXCZS3gymAr55YT9Iw7x/5er4xOi0hdyTIInvS2OhGL6YpQ7B3akOjrnSxeJ+Uiyd+EuErimqtaHnBuyKRbOO3jXYPQ4DwF9Us+9UVyEjNiE2sRFfppZGecNPWJon4BQXPJLd5Jzp02AEMF4+kmbGPnyeyoqrYFQN9Z5dwhb+39qaRpBuVj8evsEJEroE6W7ekoxK6Xg/3DXdDveuzhpa4qgRIwKh+ObK3JkNJXsR30xf1P8zsoppwiN5PiwNSxDowJjWM0setk7hCIHahU2G8wY41tTlhzByO5EJrCzQcHxs1M4g9R/BADj1h6UL+BDcCO+THJRnYQRCYMIE92rlC0bUeeq5mRyDyBsv9DtxKiwwUgt0isB3HEsdYSUw2bZGItNUifqlwft8+rscbEyan0Vs669Z4Juxeq7/pCufwH1u6n/n2tHPAj86w2xsBTMXA3DK5FFp+mWzhb9Z3X822xDcJy4VCWpOTv+5/kumqxVd8gccp8XX4thWFXnh1YqBZ3U2AnSYgPPGipsCUXHL8lYHfU/iJvxaqHCC24yQXi7YMtrA4M4F+6z4D/7Xz62QAAAABJRU5ErkJggg=="></image></svg>\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">&#161;Conectemos!</span>
\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="elementor-element elementor-element-130fd0f elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-heading" data-id="130fd0f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t<h2 class="elementor-heading-title elementor-size-default">Obt&#233;n una consulta gratuita de 30 minutos para hablar sobre tu proyecto.
</h2>\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="elementor-element elementor-element-ee3a6d1 elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button" data-id="ee3a6d1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="button.default">
\t\t\t\t<div class="elementor-widget-container">
\t\t\t\t\t\t\t\t\t\t<div class="elementor-button-wrapper">
\t\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="/es/contact-es/">
\t\t\t\t\t<span class="elementor-button-content-wrapper">
\t\t\t\t\t<span class="elementor-button-icon">
\t\t\t\t''' + PHONE_SVG + r'''		</span>
\t\t\t\t\t\t\t\t\t<span class="elementor-button-text">Hablemos r&#225;pido</span>
\t\t\t\t</span>
\t\t\t\t</a>
\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t</div>
'''

# ── 3. Responsive CSS block (injected into <head> of every page) ──────────────
RESPONSIVE_CSS = '''\n<style id="zc-responsive-fixes">
/* Banner top: scale text to one line on mobile */
.elementor-element-b1755e2 .elementor-widget-container p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 1024px) {
  .elementor-element-b1755e2 .elementor-widget-container p {
    font-size: clamp(8px, 1.5vw, 14px) !important;
  }
}
@media (max-width: 767px) {
  .elementor-element-b1755e2 .elementor-widget-container p {
    font-size: clamp(7px, 2.8vw, 13px) !important;
  }
}

/* Footer: stack columns on mobile */
@media (max-width: 767px) {
  .ftr_cnt_sec > .e-con-inner,
  .elementor-element-1c2f5fa,
  .elementor-element-a163d2b {
    flex-direction: column !important;
  }
  .elementor-element-1c2f5fa .elementor-video,
  .elementor-element-9d4dacb video {
    width: 100% !important;
    max-height: 220px;
    object-fit: cover;
  }
  .elementor-element-52c9b46 .e-con-inner {
    flex-wrap: wrap !important;
    gap: 24px !important;
  }
  .elementor-element-52c9b46 .e-con-inner > .e-con {
    min-width: calc(50% - 12px) !important;
    flex: 1 1 calc(50% - 12px) !important;
  }
  .elementor-element-76ae831 {
    min-width: 100% !important;
    flex: 1 1 100% !important;
    margin-bottom: 8px !important;
  }
  /* Contact form section in footer */
  .bx_gra .e-con-inner,
  .elementor-element-916cf16 .e-con-inner,
  .elementor-element-e8c4ee6 .e-con-inner {
    flex-direction: column !important;
  }
  /* Clutch + achievements row */
  .elementor-element-f5d4881 > .e-con-inner,
  .elementor-element-f5d4881 > .e-con-full {
    flex-direction: column !important;
  }
  .elementor-element-9cc2600 {
    width: 100% !important;
  }
}
</style>\n'''

# ─────────────────────────────────────────────────────────────────────────────

def fix_contact_es(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    orig = html

    # 1. Replace single-post section with proper contact content
    sp_start = html.find('<div data-elementor-type="single-post"')
    footer_start = html.find('<div data-elementor-type="footer"')
    if sp_start != -1 and footer_start != -1 and sp_start < footer_start:
        html = html[:sp_start] + MAIN_CONTENT_ES + html[footer_start:]
        print('  OK: Replaced single-post section with Spanish contact content')
    else:
        print('  SKIP: single-post section not found or already fixed')

    # 2. Inject video/"Conectemos!" block at start of footer e-con-inner
    FOOTER_INNER_ANCHOR = '<div class="elementor-element elementor-element-f5d4881'
    if '1c2f5fa' not in html and FOOTER_INNER_ANCHOR in html:
        footer_pos = html.rfind('<div data-elementor-type="footer"')
        f5_pos = html.find(FOOTER_INNER_ANCHOR, footer_pos)
        if f5_pos != -1:
            html = html[:f5_pos] + VIDEO_CONNECT_ES + html[f5_pos:]
            print('  OK: Injected video/Conectemos section into footer')
    else:
        print('  SKIP: Video section already present or f5d4881 not found in footer')

    if html != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'  Saved: {path}')
    else:
        print(f'  No changes made to {path}')


def add_responsive_css(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    if 'zc-responsive-fixes' in html:
        return False  # already done
    # Inject just before </head>
    if '</head>' in html:
        html = html.replace('</head>', RESPONSIVE_CSS + '</head>', 1)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        return True
    return False


# ── Run ───────────────────────────────────────────────────────────────────────
print('\n=== Fixing contact-es.html ===')
fix_contact_es('contact-es.html')
fix_contact_es('es/contact-es/index.html')

print('\n=== Adding responsive CSS to all HTML pages ===')
all_files = list(set(glob.glob('**/*.html', recursive=True) + glob.glob('*.html')))
changed = 0
for f in sorted(all_files):
    if add_responsive_css(f):
        print(f'  CSS added: {f}')
        changed += 1
print(f'\nDone. Responsive CSS added to {changed} files.')
