//#btnRise �y�[�W��ɖ߂�{�^���@�ŏ�ʒu�͔�\���E�X�N���[���ŕ\��������
//�{�^�����N���b�N�ŏ㕔�A�j���[�V�����ړ�
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

//�y�[�W�������N�͑S�ăA�j���[�V�����ړ�������
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