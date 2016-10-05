$(function(){

  var $navbar = $('#navbar'),
      y_position = $navbar.offset().top,
      navbar_height = $navbar.height();


  $(window).scroll( function(){
    var scrollTop = $(this).scrollTop();

    $('.project-card').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = scrollTop + $(window).height();

      if( bottom_of_window > bottom_of_object - 200 ){
          $(this).fadeTo("slow", 2)
      }
    });

    if (scrollTop > y_position + navbar_height) {
      $navbar.addClass("navbar-fixed");
    } else if (scrollTop <= y_position) {
      $navbar.removeClass("navbar-fixed");
    }
  });

  $("#nav-email-icon").click(function() {
    $("#nav-email-info").toggle("slow")
  });

  $(".button-collapse").sideNav();
});
//
//
// var num = 200; //number of pixels before modifying styles
//
// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('.menu').addClass('fixed');
//     } else {
//         $('.menu').removeClass('fixed');
//     }
// });



//
//
// (function($) {
//     "use strict";
//
//     var $navbar = $("#navbar"),
//         y_pos = $navbar.offset().top,
//         height = $navbar.height();
//
//     $(document).scroll(function() {
//         var scrollTop = $(this).scrollTop();
//
//         if (scrollTop > y_pos + height) {
//             $navbar.addClass("navbar-fixed").animate({
//                 top: 0
//             });
//         } else if (scrollTop <= y_pos) {
//             $navbar.removeClass("navbar-fixed").clearQueue().animate({
//                 top: "-48px"
//             }, 0);
//         }
//     });
//
// })(jQuery, undefined);
