$(function() {

  $('.team__slider-inner').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          draggable: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          draggable: true,
          dots: true,
          appendDots: $('.team__dots')
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          draggable: true,
          dots: true,
          appendDots: $('.team__dots')
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true,
          dots: true,
          appendDots: $('.team__dots')
        },
      },
    ]
  })
  $('.team__arrow-left').on('click' , function(e) {
    e.preventDefault()
    $('.team__slider-inner').slick('slickPrev')
  })
  $('.team__arrow-right').on('click', function(e){
    e.preventDefault()
    $('.team__slider-inner').slick('slickNext')
  })

  //Иницилизируем слайдер с параметрами по умолчанию
  $('.testimonials__slider').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          appendDots: $('.testimonials__dots')
        },
      },
    ]
  });
  $('.testimonials__arrow-left').on('click' , function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__arrow-right').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.accordion__item-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('accordion__item-link--active')) {
      $(this).removeClass('accordion__item-link--active')
      $(this).children('.accordion__item-text').slideUp()
    } else {
      $('.accordion__item-link').removeClass('accordion__item-link--active')
      $('.accordion__item-text').slideUp()
      $(this).addClass('accordion__item-link--active')
      $(this).children('.accordion__item-text').slideDown()
    }
  })

  $('.burger, .overlay').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})