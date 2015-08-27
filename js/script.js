$(function(){
  $(window).scroll( function(){
    $('.project-card').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object - 200 ){
          $(this).fadeTo("slow", 1)
      }
    });
  });
  $("#nav-phone-icon").click(function() {
    $("#nav-phone-info").toggle("slow")
  })
  $("#nav-email-icon").click(function() {
    $("#nav-email-info").toggle("slow")
  })
  $(".button-collapse").sideNav();
});
