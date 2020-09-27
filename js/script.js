$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      slidesToShow:4,
      initialSlide:5,
      infinite:true,
      speed:500,
      easing:'ease',
      waitForAnimate:false,
      // centerMode:true,
      responsive:[
         {
            breakpoint: 720,
            settings: {
               sliderToShow:2
            }
         },{
            breakpoint: 450,
            settings: {
               sliderToShow:1
            }
         }
      ]
   });
});