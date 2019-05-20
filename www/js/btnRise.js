//#btnRise ページ上に戻るボタン　最上位置は非表示・スクロールで表示させる
//ボタンをクリックで上部アニメーション移動
$(document).ready(function() {
  var btnRise = $('#btnRise');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            btnRise.fadeIn();
       } else {
            btnRise.fadeOut();
            }
       });
       btnRise.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});

//ページ内リンクは全てアニメーション移動させる
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});