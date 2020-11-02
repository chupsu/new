$(function(){
  $('.blog__posts').slick({
     arrows: false,
     dots: true,
     fade: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     easing: 'ease',
     waitForAnimate: false,
     appendDots:$('.blog__post'),
  });

  $('.blog__posts').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var activeSlide = nextSlide + 1;
    var slide_child = ':nth-child('+ activeSlide +')';
    $('.blog__posts .blog__post'+ slide_child + '').find('.slick-dots li'+ slide_child +' button').css("background-color" , "#00B2A0");
  });

  $('.menu__burger').on('click', function(){
    $('.menu__burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  let mixer = mixitup('.gallery__items');
})