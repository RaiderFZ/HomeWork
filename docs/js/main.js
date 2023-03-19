$(function() {

  $('.team__slider-inner').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
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
    variableWidth: true
  });
  $('.testimonials__arrow-left').on('click' , function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__arrow-right').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })
})