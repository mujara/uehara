/* スマホページ用アコーディオングローバルナビ
======================================== */
$(function(){
	var state = false;
	var scrollpos;
	$('.globalNaviSmall__icon').click(function(){
		$(this).next('.globalNaviSmall__menu').slideToggle();
		$(this).next('.globalNaviSmall__menu').siblings('.globalNaviSmall__menu').slideUp();
		$(this).toggleClass('open');   
		$(this).siblings('.globalNaviSmall__menu').removeClass('open');
			/* ナビがでている間　画面は固定 */
		    if(state == false) {
		      scrollpos = $(window).scrollTop();
		      $('body').addClass('pagefixed').css({'top': -scrollpos});
		      state = true;
		    } else {
		      $('body').removeClass('pagefixed').css({'top': 0});
		      window.scrollTo( 0 , scrollpos );
		      state = false;
		    }
	});
});

$(function () {
    var $animation = $('.globalNaviSmall__icon');

    $animation.on('click',function(){
        if ($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
        } else {
            $(this).addClass('is-open');
        }
    });
});

/* 通常のアコーディオン用
======================================== */
/*
$(function(){
    $('.btnAccordion').click(function(){
        $(this).next('.accordionContents').slideToggle();
        $(this).next('.accordionContents').siblings('.accordionContents').slideUp();
        $(this).toggleClass('open');   
        $(this).siblings('.accordionContents').removeClass('open');
    });
});

$(function () {
    var $animation = $('.btnAccordion');

    $animation.on('click',function(){
        if ($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
        } else {
            $(this).addClass('is-open');
        }
    });
});

*/