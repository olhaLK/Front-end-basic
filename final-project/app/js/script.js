$(document).ready(function() {
    $('.js-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slider__dots',
        adaptiveHeight: true,
        cssEase: 'linear'
    });

    function fixSliderLayout() {
        if ($(window).width() >= 992) {
            $('.slider__item').each(function() {
                $(this).css({
                    'display': 'grid',
                    'float': 'none',
                    'margin': '0',
                    'opacity': '1',
                    'transform': 'none'
                });
            });

            $('.slick-track').css({
                'display': 'flex',
                'width': '100%',
                'transform': 'none'
            });
        }
    }
    fixSliderLayout();
    $(window).on('resize orientationchange', fixSliderLayout);
    $('.js-slider').on('afterChange', fixSliderLayout);
});


$('.js-slider-02').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slider__dots',
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


$('.menu__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');

    if ($('.menu__list').hasClass('active')) {
        $('body').css({
            overflow: 'hidden',
            position: 'fixed',
            width: '100%',
            height: '100%'
        });
    } else {
        $('body').css({
            overflow: '',
            position: '',
            width: '',
            height: ''
        });
    }
});

