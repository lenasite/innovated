$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
            }
          ]
    });

    $('.menu__btn').on('click', function(){
        $('.header__list').addClass('header__list-active');
        $('.menu__btn').addClass('menu__btn-active');
    }); 
    $('.menu__close').on('click', function(){
        $('.header__list').removeClass('header__list-active');
        $('.menu__btn').removeClass('menu__btn-active');
    });


    $('.footer__title').on('click', function(){
      $(this).toggleClass('footer__list-active');
    });

});