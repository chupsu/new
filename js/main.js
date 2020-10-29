$(function(){
  let mixer = mixitup('.gallery__items');
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
})
$('.blog__posts').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var activeSlide = nextSlide + 1;
  var slide_child = ':nth-child('+ activeSlide +')';
  $('.blog__posts .blog__post'+ slide_child + '').find('.slick-dots li'+ slide_child +'').css("background-color" , "#00B2A0");
});