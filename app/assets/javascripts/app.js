$(document).ready(function() {

  $(".input").keyup(function(){
    $(this).next($('.input')).focus();
    if ( $(this).hasClass('last') ) {
      $('.generate').focus();
    }
  });

});
