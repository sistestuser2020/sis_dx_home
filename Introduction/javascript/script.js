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
	$('.js-modal-open').on('click',function(){	//要素=js-modal-open（クリックしてみて）をクリックされると以下ロジックを実行
		var img = new Array (			//出力するイメージファイルを配列化
			'images/omikuji_daikichi.png',
			'images/omikuji_chuukichi.png',
			'images/omikuji_syoukichi.png',
			'images/omikuji_kyou.png',
		);
		var random = Math.floor(Math.random() * img.length);	//0～配列数までの間でランダムに数字を生成し小数点以下切り捨てて整数化
		$('.omikuji-modal-content').append('<p>あなたの今日の運勢は</p>');	//モーダルコンテンツへHTMLソースを埋め込み
		$('.omikuji-modal-content').append('<P><img src =' +img[random]+ '></p>');	//ランダム整数に該当する位置のイメージをセット
		$('.omikuji-modal-content').append('<a class="js-modal-close" href="">閉じる</a>');
		var h1 = $('#header_inner').height();	//ヘッダーID=header_innerの高さを取得
		var h2 = $('.CoffeeBrake_Top').height();	//ヘッダー要素=CoffeeBrake_Topの高さを取得
		var h3 = h1 + h2
		$('.js-modal,.omikuji-modal-bg').css('margin-top', - h3);	//モーダルやモーダル背景のTOP位置がヘッダー直下になってしまう対策としてヘッダー分の高さ分上へ移動
		var scrollPosition = $(window).scrollTop();	//現在のスクロール座標位置を取得
		$('body').addClass('fixed').css({'top': -scrollPosition});	//モーダル表示中はスクロールできないようにbodyの座標位置を固定化
		$('.js-modal').fadeIn();	//モーダルをフェードイン表示
		return false;	//元の画面は更新しない
	});
	$('.js-modal-close').on('click',function(){	//要素=js-modal-close（閉じるとかモーダル背景）をクリックされると以下ロジックを実行
		$('.js-modal').fadeOut();	//モーダルをフェードアウト消去
		$('.omikuji-modal-content').empty();	//モーダルコンテンツに先ほどのHTMLソースが残存しているので消去
		$('body').removeClass('fixed').css({'top': 0});		//bodyを固定化していた定義を開放
		window.scrollTo( 0 , scrollPosition );			//スクロール位置が初期化されているので元の座標位置へ移動
		return false;
	});
});
