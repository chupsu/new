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
    let activeSlide = nextSlide + 1,
        slide_child = ':nth-child('+ activeSlide +')';
    $('.blog__posts .blog__post'+ slide_child + '').find('.slick-dots li'+ slide_child +' button').css("background-color" , "#00B2A0");
  });

  $('.menu__burger, .menu__link').on('click', function(){
    $('.menu__burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(".header__top-inner a").on("click", function(e){
    e.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  let mixer = mixitup('.gallery__items');
});

window.addEventListener('scroll', function() {
  let scrollBackground = document.querySelector('.header__top')
  if(pageYOffset > 10){
  scrollBackground.classList.add("header__top--bg")} 
  else{
  scrollBackground.classList.remove("header__top--bg")
  }
  let scrollPadding = document.querySelector('.header__top-inner')
  if(pageYOffset > 10){
  scrollPadding.classList.add("header__top-inner--padding")} 
  else{
  scrollPadding.classList.remove("header__top-inner--padding")
  }
});
