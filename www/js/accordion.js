/* �X�}�z�y�[�W�p�A�R�[�f�B�I���O���[�o���i�r
======================================== */
$(function(){
	var state = false;
	var scrollpos;
	$('.globalNaviSmall__icon').click(function(){
		$(this).next('.globalNaviSmall__menu').slideToggle();
		$(this).next('.globalNaviSmall__menu').siblings('.globalNaviSmall__menu').slideUp();
		$(this).toggleClass('open');   
		$(this).siblings('.globalNaviSmall__menu').removeClass('open');
			/* �i�r���łĂ���ԁ@��ʂ͌Œ� */
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

/* �ʏ�̃A�R�[�f�B�I���p
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