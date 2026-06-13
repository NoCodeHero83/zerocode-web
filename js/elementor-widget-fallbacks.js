/*
 * Fallback initializer for Elementor's "Counter" and "Image Carousel" widgets.
 *
 * On this static export, Elementor lazy-loads the JS handlers for these
 * widgets from per-widget bundle files (e.g. counter.*.bundle.min.js,
 * image-carousel.*.bundle.min.js) that are not part of this export, so the
 * widgets never animate/initialize. This script re-implements just enough of
 * both handlers using the jQuery Numerator and Swiper libraries that are
 * already loaded on the page, reading the same data-* attributes Elementor
 * outputs.
 */
(function () {
	function spacingPx(spacing, fallback) {
		if (!spacing) {
			return fallback;
		}
		var n = parseInt(spacing.size, 10);
		return isNaN(n) ? fallback : n;
	}

	function initCounters($) {
		if (!$ || typeof $.fn.numerator !== 'function') {
			return;
		}

		var numbers = document.querySelectorAll('.elementor-widget-counter .elementor-counter-number[data-to-value]');

		numbers.forEach(function (el) {
			var run = function () {
				$(el).numerator({
					toValue: el.getAttribute('data-to-value'),
					fromValue: el.getAttribute('data-from-value') || 0,
					duration: el.getAttribute('data-duration') || 1000,
					delimiter: el.getAttribute('data-delimiter') || '',
					rounding: el.getAttribute('data-rounding') || 0,
				});
			};

			if (!window.IntersectionObserver) {
				run();
				return;
			}

			var observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						run();
						observer.disconnect();
					}
				});
			});
			observer.observe(el);
		});
	}

	function initCarousels() {
		if (typeof Swiper === 'undefined') {
			return;
		}

		document.querySelectorAll('.elementor-widget-image-carousel').forEach(function (widget) {
			var wrapper = widget.querySelector('.elementor-image-carousel-wrapper.swiper');
			if (!wrapper || wrapper.classList.contains('swiper-initialized')) {
				return;
			}

			var settings = {};
			try {
				settings = JSON.parse(widget.getAttribute('data-settings') || '{}');
			} catch (e) {}

			var desktopShow = parseInt(settings.slides_to_show, 10) || 3;
			var tabletShow = parseInt(settings.slides_to_show_tablet, 10) || desktopShow;
			var mobileShow = parseInt(settings.slides_to_show_mobile, 10) || tabletShow;

			var desktopSpace = spacingPx(settings.image_spacing_custom, 20);
			var tabletSpace = spacingPx(settings.image_spacing_custom_tablet, desktopSpace);
			var mobileSpace = spacingPx(settings.image_spacing_custom_mobile, tabletSpace);

			var options = {
				slidesPerView: desktopShow,
				slidesPerGroup: parseInt(settings.slides_to_scroll, 10) || 1,
				spaceBetween: desktopSpace,
				loop: 'no' !== settings.infinite,
				speed: parseInt(settings.speed, 10) || 500,
				breakpoints: {
					0: { slidesPerView: mobileShow, spaceBetween: mobileSpace },
					768: { slidesPerView: tabletShow, spaceBetween: tabletSpace },
					1025: { slidesPerView: desktopShow, spaceBetween: desktopSpace },
				},
			};

			if ('yes' === settings.autoplay) {
				options.autoplay = {
					delay: Number(settings.autoplay_speed) || 0,
					disableOnInteraction: 'yes' === settings.pause_on_interaction,
				};
			}

			var nextEl = widget.querySelector('.elementor-swiper-button-next');
			var prevEl = widget.querySelector('.elementor-swiper-button-prev');
			if (nextEl && prevEl) {
				options.navigation = { nextEl: nextEl, prevEl: prevEl };
			}

			var paginationEl = widget.querySelector('.swiper-pagination');
			if (paginationEl) {
				options.pagination = { el: paginationEl, clickable: true };
			}

			new Swiper(wrapper, options);
		});
	}

	initCounters(window.jQuery);
	initCarousels();
})();
