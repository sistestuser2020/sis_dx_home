var slideTime = 5000;
var autoSlideTimer = null;

var mySwiper = new Swiper('.swiper-container', {
	// slideLoop
	loop: true,
	loopFillGroupWithBlank: false,
	preloadImages: false,
	freeMode: true,
	freeModeMomentumRatio: 2,
	freeModeMomentumBounce: true,
	freeModeMomentum: true,
	freeModeMinimumVelocity: 5.5,
	loopPreventsSlide: false,
	// slideSpeed (ms)
	speed: 5000,
    	centeredSlides : true,
	slidesPerView: 5.5,
    	spaceBetween: 80,
    
	// autoSlide
	autoplay: {
		// slideSpeed (ms)
		delay: 1,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	
	on: {
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
	},
	
	// arrowGuide
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	
	// pagesGuide
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
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

$(function() {
	$('a[href^="#"]' + 'a:not(".carousel-control")').click(function(){
	var speed = 750;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
	});
});
