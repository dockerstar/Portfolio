$(document).ready(function(){
    $(window).scroll(function() {
      var top = $(this).scrollTop();
      if ( top >= 200) {
        document.getElementById('aside_span').style.color = '#000000';
      } else if ( top <= 200) {
        document.getElementById('aside_span').style.color = '#FFFFFF';
      }
    });
  });