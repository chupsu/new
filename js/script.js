$(document).ready(function(){
   $('.work__slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      slidesToShow:4,
      initialSlide:0,
      infinite:true,
      speed:500,
      easing:'ease',
      waitForAnimate:false,
      // centerMode:true,
      responsive:[
         {
            breakpoint: 950,
            settings: {
               slidesToShow:3,
            }
         },{
            breakpoint: 720,
            settings: {
               slidesToShow:2,
               dots:false,
            }
         },{
            breakpoint: 480,
            settings: {
               slidesToShow:1,
            }
         }
      ]
   });
   $('.reviews__slider').slick({
      arrows:false,
      dots:false,
      adaptiveHeight:true,
      slidesToShow:4,
      initialSlide:0,
      infinite:true,
      speed:500,
      easing:'ease',
      waitForAnimate:false,
      // centerMode:true,
      responsive:[
         {
            breakpoint: 950,
            settings: {
               slidesToShow:3,
            }
         },{
            breakpoint: 720,
            settings: {
               slidesToShow:2,
               dots:false,
            }
         },{
            breakpoint: 480,
            settings: {
               slidesToShow:1,
            }
         }
      ]
   });
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.spoiler__title').click(function(event) {
      if($('.tabcontent').hasClass('one__spoiler')){
         $('.spoiler__title').not($(this)).removeClass('active');
         $('.spoiler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
   $('[data-fancybox]').fancybox({
      protect: true
   });
   $('input').click(function() {
      var category = $(this).val();
      
      var matchedItems = $('.' + category).each(function () {
          var anyChecked = false;
          var classArray = this.className.split(/\s+/);
          
          for(idx in classArray)
          {
              if ($('#filter-' + classArray[idx]).is(":checked"))
              {
                  anyChecked = true;
                  break;
              }
          }
          
          if (! anyChecked) $(this).hide();
          else $(this).show();
          
      });
  
  });
// $(".tabs__block1").not(":first").hide();
// $(".tabs__block .tabs__item").click(function() {
   // $(".tabs__block .tabs__item").removeClass("active").eq($(this).index()).addClass("active");
   // $(".tabs__block1").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");
});
function openTab(evt, openTab, subTab) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");

   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   if(subTab) {
     var parent = evt.currentTarget.closest('.tabcontent');
     parent.style.display = "block";
     parent.className += " active";
   }
   document.getElementById(openTab).style.display = "block";
   evt.currentTarget.className += " active";
}
checked=false;
function checkedAll (frm1) {
	var aa= document.getElementById('frm1');
	 if (checked == false){
           checked = true
          }
        else{
          checked = false
          }
	for (var i =0; i < aa.elements.length; i++){
	 aa.elements[i].checked = checked;
	}
}
