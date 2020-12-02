(function ($) {
	$(function () {

		if (window.devicePixelRatio > 1)
			$('img.retina').each(function () {
				var t = $(this);
				t.attr('src', t.attr('src').replace(/(\.[a-z]+)$/i, "@2x$1"));
			});

		var body = $("body");
		var userAgent = window.navigator.userAgent;
		var appVersion = window.navigator.appVersion;

		if ((userAgent.indexOf("iPhone") > 0) || (userAgent.indexOf("iPod") > 0) || (userAgent.indexOf("iPad") > 0)) {
			body.addClass("iosStyle");

		} else if (userAgent.indexOf("Android") > 0) {
			body.addClass("androidStyle");

		} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
			body.addClass('ieStyle');

		} else {
			body.addClass("pcStyle");

			$(".hover").hover(function () {
				$(this).stop().fadeTo("fast", 0.6);
			}, function () {
				$(this).stop().fadeTo("fast", 1.0);
			});
		}

		$("a.touchHover, button.touchHover").bind("touchstart mousedown", function () {

			var touch = $(this);

			timeout = setTimeout(function () {
				touch.addClass("active");
			}, 60);

			$("body").bind("touchend mouseup", function () {
				clearTimeout(timeout);
				touch.removeClass("active");
			});

			$("body").bind("touchmove mousemove", function () {
				clearTimeout(timeout);
				touch.removeClass("active");
			});
		});

		$(".go-top").click(function () {
			$("html, body").animate({
				scrollTop: 0
			});
			return false;
		});
		$(window).on('load resize scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.js-go-top').addClass('active');
			} else {
				$('.js-go-top').removeClass('active');
			}
		});

		var progressWidth = 0;

		function onReady(callback) {
			var intervalID = window.setInterval(checkReady, 1000);

			function checkReady() {
				progressWidth += 1;
				if (document.getElementsByTagName('body')[0] !== undefined) {
					window.clearInterval(intervalID);
					callback.call(this);
				}
			}
		}
		if ($.cookie('firstLoading') != 'true') {
			$.cookie('firstLoading', 'true');
			$('.js-loading').addClass('active');
			onReady(function () {
				loadingTime = setInterval(function () {
					if (progressWidth >= 90 && progressWidth < 93) {
						progressWidth = progressWidth - 2;
						$('.jsLoadingProcess span').css({
							width: progressWidth + '%'
						});
					} else {
						progressWidth += 1;
						$('.jsLoadingProcess span').css({
							width: progressWidth + '%'
						});
					}
				}, 100);
				$('body').waitForImages(true).done(function () {
					clearInterval(loadingTime);
					$('.jsLoadingProcess span').css({
						width: '100%'
					});
					setTimeout(function () {
						$('.js-wrapper').addClass('active');
						$('.js-loading').removeClass('active');
					}, 500);
				});
			});
		} else {
			$.cookie('firstLoading', 'true');
			$('.js-wrapper').addClass('active');
			$('.js-loading').removeClass('active');
		}
		// ==============================================================
		// toggle menu sp
		// ==============================================================
		var $header = $('#header'),
			$subItem = $header.find('.header__link-sub');
		if ($header.length > 0) {
			$(window).on('load resize', function (event) {
				$('#main, #page-home .keyv').css('margin-top', $header.outerHeight());
				if ($(window).width() > 736) {
					$subItem.hover(function () {
						$(this).children('.header__link-sub--sub').stop().fadeIn('fast');
					}, function () {
						$(this).children('.header__link-sub--sub').stop().fadeOut('fast');
					});
				} else {
					$subItem.off('hover');
				}
			});
			$(window).on('load resize scroll', function (event) {
				if ($(this).scrollTop() > 0) {
					$header.addClass('header--scroll');
				} else {
					$header.removeClass('header--scroll');
				}
			});
		}

		// ==============================================================
		// jsHomeSwiper
		// ==============================================================
		if ($('.jsHomeSwiper').length) {
			var autoSlideTimer = null;
			var slideTime = 5000;
			var $swiper = new Swiper('.jsHomeSwiper', {
				slidesPerView: 4,
				spaceBetween: 30,
				slidesPerGroup: 1,
				freeMode: true,
				loop: true,
				loopFillGroupWithBlank: true,
				// preloadImages: true,
				allowTouchMove: false,
				freeModeMomentum: false,
				speed: 5000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				breakpoints: {
					1366: {
						slidesPerView: 4,
						spaceBetween: 30,
						slidesPerGroup: 1,
						freeMode: true,
						loop: true,
						preloadImages: true,
						speed: 3500,
						autoplay: {
							delay: 0,
							disableOnInteraction: false,
						}
					},
					736: {
						slidesPerView: 2,
						slidesPerGroup: 1,
						spaceBetween: 20,
						centeredSlides: true,
						autoplay: {
							delay: 3000
						}
					}
				},
				on: {
					init: function () {
						if ($(window).width() < 736) {
							$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').addClass('slide-hover');
							$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').find('.js-keyv-item-title').addClass('slide-hover');
						}
					},
					slideChangeTransitionStart: function () {
						if ($(window).width() < 736) {
							$('.jsHomeSwiper').find('.js-keyv-item').removeClass('slide-hover');
							$('.jsHomeSwiper').find('.js-keyv-item-title').removeClass('slide-hover');
						}
					},
					slideChangeTransitionEnd: function () {
						if ($(window).width() < 736) {
							$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').addClass('slide-hover');
							$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item-title').addClass('slide-hover');
						}
					},
					autoplay: function () {
						if (autoSlideTimer != null) {
							clearInterval(autoSlideTimer);
							autoSlideTimer = null;
							slideTime = 5000;
						}
						autoSlideTimer = setInterval(function () {
							slideTime -= 100;
							if (slideTime < 0) {
								slideTime = 0;
							}
						}, 100);
					}
				}
			});
			var $slider = $swiper.$el.children('.swiper-wrapper');
			var curStyle;
			$('.jsHomeSwiper').on('mouseenter', function (e) {
				$swiper.autoplay.stop();

				clearInterval(autoSlideTimer);
				autoSlideTimer = null;

				// Calculate transition-duration
				curStyle = $slider.attr('style');
				var curStyleArr = curStyle.split('; ');
				var trsDuration;
				for (let i = 0; i < curStyleArr.length; i++) {
					if (curStyleArr[i].indexOf('transition-duration') !== -1) {
						trsDuration = curStyleArr[i].split(': ')[1];
					}
				}
				curStyle = curStyle.replace(trsDuration, slideTime + 'ms');

				// Stop slider where it be
				$slider.css({
					'transform': $slider.css('transform'),
					'transition-duration': '0s'
				});
			});
			$('.jsHomeSwiper').on('mouseleave', function (e) {
				if (curStyle) {
					$swiper.autoplay.start();
					$slider.attr('style', curStyle);
				}
			});
			$(window).on("pageshow", function (event) {
				if (event.originalEvent.persisted) {
					window.location.reload();
				}
			});
		}
		$(window).on('resize', function (e) {
			if ($('.jsHomeSwiper').length) {
				$swiper.destroy();
				$swiper = new Swiper('.jsHomeSwiper', {
					slidesPerView: 4,
					spaceBetween: 30,
					slidesPerGroup: 1,
					freeMode: true,
					loop: true,
					loopFillGroupWithBlank: true,
					// preloadImages: true,
					allowTouchMove: false,
					freeModeMomentum: false,
					speed: 5000,
					autoplay: {
						delay: 0,
						disableOnInteraction: false,
					},
					breakpoints: {
						1366: {
							slidesPerView: 4,
							spaceBetween: 30,
							slidesPerGroup: 1,
							freeMode: true,
							loop: true,
							preloadImages: true,
							speed: 3500,
							autoplay: {
								delay: 0,
								disableOnInteraction: false,
							}
						},
						736: {
							slidesPerView: 2,
							slidesPerGroup: 1,
							spaceBetween: 20,
							centeredSlides: true,
							autoplay: {
								delay: 3000
							}
						}
					},
					on: {
						init: function () {
							if ($(window).width() < 736) {
								$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').addClass('slide-hover');
								$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').find('.js-keyv-item-title').addClass('slide-hover');
							}
						},
						slideChangeTransitionStart: function () {
							if ($(window).width() < 736) {
								$('.jsHomeSwiper').find('.js-keyv-item').removeClass('slide-hover');
								$('.jsHomeSwiper').find('.js-keyv-item-title').removeClass('slide-hover');
							}
						},
						slideChangeTransitionEnd: function () {
							if ($(window).width() < 736) {
								$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item').addClass('slide-hover');
								$('.jsHomeSwiper').find('.swiper-slide-active').find('.js-keyv-item-title').addClass('slide-hover');
							}
						},
						autoplay: function () {
							if (autoSlideTimer != null) {
								clearInterval(autoSlideTimer);
								autoSlideTimer = null;
								slideTime = 5000;
							}
							autoSlideTimer = setInterval(function () {
								slideTime -= 100;
								if (slideTime < 0) {
									slideTime = 0;
								}
							}, 100);
						}
					}
				});
			}
		});
		//
		$('.js-toggle-menu').on('click', function (event) {
			event.preventDefault();
			$('.js-nav-modal').addClass('active');
			$('html,body').addClass('hidden-scroll');
		});
		$('.js-nav-modal__btn-close').on('click', function (event) {
			event.preventDefault();
			$('.js-nav-modal').removeClass('active');
			$('html,body').removeClass('hidden-scroll');
		});

		//
		if ($('.js-ticker').length) {
			var $jsTicker = new Swiper('.js-ticker', {
				slidesPerView: 2,
				slidesPerGroup: 2,
				loop: true,
				speed: 2000,
				direction: 'vertical',
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					736: {
						slidesPerView: 1,
						slidesPerGroup: 1
					}
				}
			});
			$('.js-ticker').on('mouseenter', function (e) {
				$jsTicker.autoplay.stop();
			});
			$('.js-ticker').on('mouseleave', function (e) {
				$jsTicker.autoplay.start();
			});
		}
		window.sr = ScrollReveal();
		sr.reveal('.jsScroll', {
			duration: 600,
			delay: 200,
			distance: 0
		});
		sr.reveal('.js-scroll--left', {
			duration: 800,
			delay: 200,
			origin: 'left',
			afterReveal: imgLoad
		});
		sr.reveal('.js-scroll--right', {
			duration: 800,
			delay: 200,
			origin: 'right',
			afterReveal: imgLoad
		});

		function imgLoad(el) {
			var $imgLoad = $(el).find('.js-img-load');
			if ($imgLoad.length) {
				$imgLoad.addClass('active');
				setTimeout(function () {
					$imgLoad.addClass('hidden-bg');
					setTimeout(function () {
						$(el).find('.fade-in-reveal-load').addClass('active');
					}, 1000);
				}, 1000);
			}
		}
		// ==============================================================
		//accordion
		// ==============================================================
		$('.js-accordion__btn').on('click', function (e) {
			e.preventDefault();
			if ($(this).hasClass('active')) {
				$(this).parents('.js-accordion').find('.js-accordion__row').addClass('hidden');
				$(this).removeClass('active');
			} else {
				$(this).parents('.js-accordion').find('.js-accordion__row').removeClass('hidden');
				$(this).addClass('active');
			}
		});

		// ==============================================================
		// tab
		// ==============================================================
		// define scroll reveal inside tab
		var $tabContent = $('.tab-box');
		$tabContent.each(function (index, el) {
			sr.reveal('.jsScroll--tab', {
				container: $tabContent,
				duration: 800,
				delay: 200
			});
		});

		$('.js-tab a').live('click', function (event) {
			var elm = $(this);
			if (!elm.parent('li').hasClass('active')) {
				$('.tab-box').hide();
				elm.parent('li').addClass('active').siblings().removeClass('active');
				elm.parents('.tab-area').find('.tab-box').fadeOut('fast');
				$(this.hash).fadeIn('fast', function () {
					sr.sync();
				});
			}
			var offTop = $('#tab-area').offset().top - $('#header').outerHeight();

			if ($(this).hasClass('js-tab-scroll')) {
				//$('body, html').stop().animate({scrollTop:0}, 500);
				var $imgSrc = $(this).data('src');
				var $imgAlt = $(this).data('alt');
				if ($imgSrc != null) {
					setTimeout(function () {
						$('.js-img--keyv').attr({
							'src': $imgSrc,
							'alt': $imgAlt
						});
					}, 1000);
				}
				// setTimeout(function() {
				// 	$('body, html').stop().animate({scrollTop:offTop}, 600);
				// }, 3000);
			} else {
				$('body, html').stop().animate({
					scrollTop: offTop
				}, 600);
			}
			return false;
		});

		// ==============================================================
		// anchorlink
		// ==============================================================
		$('.js-anchor a').click(function (e) {
			var anchor_str = $(this).attr('href').split("/"),
				anchor = anchor_str[anchor_str.length - 1];
			if (anchor != '#') {
				if ($(anchor).length) {
					var offTop = $(anchor).offset().top - $('#header').outerHeight() - 10; 
					$('body, html').stop().animate({
						scrollTop: offTop
					}, 600);
				}
				$('.js-nav-modal').removeClass('active');
			}
		});
		// anchorlink to tab
		$('.js-anchor-tab a').click(function (e) {
			var $anchor_tab = $(this).attr('href').split("/");
			anchor = $anchor_tab[$anchor_tab.length - 1];
			if (anchor != '#') {
				if (!$(anchor).is(':visible')) {
					$('.js-tab a[href="' + anchor + '"]').click();
				}
				if ($('#page-business').length) {
					$('body, html').stop().animate({
						scrollTop: 0
					}, 500);
				} else {
					if ($('#tab-area').length) {
						var offTop = $('#tab-area').offset().top - $('#header').outerHeight() - 10;
						$('body, html').stop().animate({
							scrollTop: offTop
						}, 600);
					}
				}
				if ($('.nav-modal').hasClass('active')) {
					$('.js-nav-modal__btn-close').trigger('click');
				}
			}
		});
		// anchorlink to other page
		$(window).bind('load', function (event) {
			var myhash = location.hash,
				hashElm = myhash;
			if (myhash != '#' && myhash != '') {
				if ($('.js-tab').length) {
					$('.js-tab a[href="' + myhash + '"]').click();
					hashElm = '#tab-area';
					var $imgSrc = $('.js-tab a[href="' + myhash + '"]').data('src');
					if ($imgSrc != null) {
						$('.js-img--keyv').attr('src', $imgSrc);
					}
				}
				var offTop = $(hashElm).offset().top - $('#header').outerHeight() - 10;
				if ($('#page-business').length) {
					$('body, html').stop().animate({
						scrollTop: 0
					}, 500);
					// setTimeout(function() {
					// 	$('body, html').stop().animate({scrollTop:offTop}, 600);
					// }, 3000);
				} else {
					$('body, html').stop().animate({
						scrollTop: offTop
					}, 600);
				}
			}
		});

	});
})(jQuery);
