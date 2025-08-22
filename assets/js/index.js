$('.trusted_slider').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5
            }
        }
    ]
});


$(document).ready(function () {
    $('#slider1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: $('#prev1'),  // Target the specific arrow for slider1
        nextArrow: $('#next1'),  // Target the specific arrow for slider1
        centerMode: false,
        centerPadding: '0',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#slider2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: $('#prev2'),  // Target the specific arrow for slider2
        nextArrow: $('#next2'),  // Target the specific arrow for slider2
        centerMode: false,
        centerPadding: '0',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#slider3').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: $('#prev3'),  // Target the specific arrow for slider3
        nextArrow: $('#next3'),  // Target the specific arrow for slider3
        centerMode: false,
        centerPadding: '0',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.logistics_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: true,
        speed: 1000,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});