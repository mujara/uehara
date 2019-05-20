// jsへのリンクは、main.jsからの相対パスで記述。
// ファイルを呼び出す時は、拡張子[.js]を削除。

requirejs.config({
  paths: { "jquery": "jquery" },
  shim: {
	"btnRise": { deps: ['jquery'] },
         "accordion":  { deps: ['jquery'] },
      	"jquery.magnific-popup.min":  { deps: ['jquery'] },
	"jquery.waypoints.min":  { deps: ['jquery'] },
        },
});

require([
  "jquery",
  "btnRise",				//上に昇るボタン用JS
  "accordion",				//アコーディオン部分用JS
  "anijs-min",				//オンマウスをトリガーでアニメーションをできるようにするJS
  "jquery.waypoints.min",	//特定の位置で発火させるJS
  "jquery.magnific-popup.min",	//モーダルウィンドウJS

],function($){ //[ , ]で区切ってfunction文を追記

	//ウインドウサイズの横幅によって条件分岐
	//ページを読み込み時
	var w = $(window).width();
	var x = 768;
	if (w <= x) {
		// スマホ時の処理
		$("#wrapper").removeClass("is-wideScreen");
		$("#wrapper").addClass("is-smallScreen");
	} else {
		// スマホ以外の処理
		$("#wrapper").addClass("is-wideScreen");
		$("#wrapper").removeClass("is-smallScreen");
	}
	//リサイズ時
	$(window).resize(function(){
		var w = $(window).width();
		var x = 768;
		if (w <= x) {
		// スマホ時の処理
			$("#wrapper").removeClass("is-wideScreen");
			$("#wrapper").addClass("is-smallScreen");
		} else {
		// スマホ以外の処理
			$("#wrapper").addClass("is-wideScreen");
			$("#wrapper").removeClass("is-smallScreen");
		}
	});

	//スティッキーヘッダー
	var $window = $(window); //ウィンドウを指定
	var sticky = false;
	 
	 $window.on("scroll", function () {
	      if ($window.scrollTop() > 100) {　//scroll位置が100の上にある場合
	           if ( sticky === false ){
				        $('#wrapper.is-wideScreen #pageTopFix').addClass("is-scroll");
				        $('#wrapper.is-wideScreen #pageTopFix.is-scroll').hide().slideDown(300);
	                sticky = true;
	           }
	      } else {
	           if ( sticky === true ){　//scroll位置が下にある場合
				        $('#wrapper.is-wideScreen #pageTopFix.is-scroll').slideUp(200,function(){
				            $('#wrapper.is-wideScreen #pageTopFix').removeClass("is-scroll").fadeIn(300);
				        });
	                sticky = false;
	           }
	      }
	 });
	 $window.trigger("scroll");
	
	//スマホ用画面固定ボタン
	$(document).ready(function() {
	  var btnPageBottom = $('#wrapper.is-smallScreen #btnPageBottom');
	    $(window).scroll(function () {
	       if ($(this).scrollTop() > 100) {
	            btnPageBottom.fadeIn();
	       } else {
	            btnPageBottom.fadeOut();
	            }
	       });
	});
	//スマホ用画面固定ボタン　リサイズ時
	$(window).resize(function(){
	  var btnPageBottom = $('#wrapper.is-smallScreen #btnPageBottom');
	    $(window).scroll(function () {
	       if ($(this).scrollTop() > 100) {
	            btnPageBottom.fadeIn();
	       } else {
	            btnPageBottom.fadeOut();
	            }
	       });
	});

	

	//jquery.magnific-popup用
	$('a[href$=".jpg"], a[href$=".gif"], a[href$=".png"]') .addClass("parent-container");// 画像へのリンクは自動でモーダルウィンドウ設定
  	$('.popup-image').magnificPopup({ type: 'image'});
	$('#wrapper').magnificPopup({
		  delegate: 'a.parent-container', 
		  type: 'image',
		  gallery: { //ギャラリー表示にする
		    enabled:true
		  }
	  });
	
	//パララクス効果用
	var $window = $(window);
	 
	$('.parallaxBox').each(function(index) {
		var $self = $(this);
		var offsetCoords = $self.offset();
	 
		$(window).scroll(function() {
			// If this section is in view
			if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
				var yPos = -($window.scrollTop() / 8);
				var coords = '50%' + yPos + 'px';
				$self.css('backgroundPosition', coords);
			}
		});
	});


	
});//end function文 & require


define(["wow"],function(){ //[ , ]で区切ってfunction文を追記
	new WOW({mobile: false}).init();
});//end function文 & require








