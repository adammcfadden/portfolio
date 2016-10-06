$(function(){
  var $navbar = $('#navbar'),
      y_position = $navbar.offset().top;


  $(window).scroll( function(){
    var scrollTop = $(this).scrollTop();

    // fade cards in as user scrolls
    $('.project-card').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = scrollTop + $(window).height();

      if( bottom_of_window > bottom_of_object - 200 ){
          $(this).fadeTo("slow", 1)
      }
    });

    // sticky navbar as user scrolls past header
    if (scrollTop > y_position) {
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
