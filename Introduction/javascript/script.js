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
	
	// arrowGuide
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	
	// pagesGuide
	//pagination: {
	//	el: '.swiper-pagination',
	//	type: 'bullets',
	//	clickable: true
	//}
});

var mySwiper2 = new Swiper('.swiper-container2', {
	loop: true,
	loopFillGroupWithBlank: false,
	loopPreventsSlide: false,
        centeredSlides : true,
        spaceBetween: 80,
	
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

//omikuji_modal
$(function() {
	//「クリックしてみて」をクリックされたときに実行する部分
	$('.js-modal-open').on('click',function(){
		//イメージを動かすクラス（cs-omikuji_box）を与える（追加と同時に動き出す。動きはCSSで定義）
		$('#omikuji_box').addClass('cs-omikuji_box');
		return false;
	});
	//スクロール座標位置
	var scrollPosition;
	//おみくじ箱のイメージが動いた後（cs-omikuji_box終了後）に実行する部分
	$('#omikuji_box').on('animationend', function() {
		//おみくじの出力イメージを配列化
		var img = new Array (
			'images/omikuji_daikichi.png',
			'images/omikuji_chuukichi.png',
			'images/omikuji_syoukichi.png',
			'images/omikuji_kyou.png',
		);
		//0～配列数までの間でランダムに数字を生成し小数点以下切り捨てて整数化
		var random = Math.floor(Math.random() * img.length);
		//ランダム整数に該当する位置のイメージをセット
		$('.omikuji-result').append('<img src =' +img[random]+ '>');
		//ヘッダーID=header_innerの高さを取得
		var h1 = $('#header_inner').height();
		//ヘッダー要素=CoffeeBrake_Topの高さを取得
		var h2 = $('.CoffeeBrake_Top').height();
		var h3 = h1 + h2;
		//現在のスクロール座標位置を取得
		scrollPosition = $(window).scrollTop();
		//モーダルTOP位置がヘッダー直下になってしまう対策としてヘッダー高さ分上へ移動＋現在位置まで下へ移動
		$('.js-modal,.omikuji-modal-bg').css('margin-top', - h3 + scrollPosition);
		//モーダル表示中はスクロールできないようにbodyの座標位置を固定化
		$('body').addClass('fixed').css({'top':-scrollPosition});
		//モーダルをフェードイン表示
		$('.js-modal').fadeIn();
		//イメージを動かすクラス（cs-omikuji_box）を削除（次回クリックに備えて）
		$('#omikuji_box').removeClass('cs-omikuji_box');
		//元の画面は更新しない
		return false;
	});
	//要素=js-modal-close（閉じるとかモーダル背景）をクリックされると以下ロジックを実行
	$('.js-modal-close').on('click',function(){
		//モーダルをフェードアウト消去
		$('.js-modal').fadeOut();
		//モーダルコンテンツにおみくじ結果が残存しているので消去（次回に備えて）
		$('.omikuji-result').empty();
		//bodyを固定化していた定義を開放
		$('body').removeClass('fixed');
		//スクロール位置が初期化されているので取得しておいた元の座標位置へ移動
		$(window).scrollTop(scrollPosition);
		return false;
	});
});
