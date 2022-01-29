$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.two_aside').fadeIn();
    $('.sidepanel').fadeOut();
  } else {
    $('.two_aside').fadeOut();
    $('.sidepanel').fadeIn();
  }
});