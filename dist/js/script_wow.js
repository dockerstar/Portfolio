$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
      $('.two_aside').fadeIn();
      $('.sidepanel').fadeOut();
    $('.hamburger__black').fadeIn();
    $('.hamburger').fadeOut();
  } else {
    $('.two_aside').fadeOut();
    $('.sidepanel').fadeIn();
    $('.hamburger__black').fadeOut();
    $('.hamburger').fadeIn();
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});