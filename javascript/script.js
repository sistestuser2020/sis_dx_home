var mySwiper = new Swiper('.swiper-container', {
	// slideEffect
	// effect: 'fade',
	// slideLoop
	loop: true,
	// slideSpeed (ms)
	speed: 700,
    centeredSlides : true,
　slidesPerView: 1.2,
	// autoSlide
	autoplay: {
		// slideSpeed (ms)
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
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

$(function(){
	$('.js-modal-open').on('click',function(){
		$('.js-modal').fadeIn();
		return false;
	});
	$('.js-modal-close').on('click',function(){
		$('.js-modal').fadeOut();
		return false;
	});
});
