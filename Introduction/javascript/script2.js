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

$(".swiper-container").mouseenter(function(){
       swiper.stopAutoplay();
});

$(".swiper-container").mouseleave(function(){
       swiper.startAutoplay();
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
