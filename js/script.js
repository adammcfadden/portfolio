$(function(){
  $(window).scroll( function(){
    $('.project-card').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object - 100 ){
          $(this).fadeTo("slow", 1)
      }
    });
  });
});
