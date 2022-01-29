
window.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
close = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
menu.classList.add('menu_active');
});

close.addEventListener('click', function() {
menu.classList.remove('menu_active');
});
});

window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger__black'),
  menu = document.querySelector('.menu'),
  close = document.querySelector('.menu__close');
  
  hamburger.addEventListener('click', function() {
  menu.classList.add('menu_active');
  });
  
  close.addEventListener('click', function() {
  menu.classList.remove('menu_active');
  });
  });

const counters = document.querySelectorAll('.percent__value'),
      lines = document.querySelectorAll('.percent__block-show');

counters.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
  $(".menu__list, .promo__btns").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});







/*
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.two_aside').fadeIn();
      $('.sidepanel').fadeOut();
    } else {
      $('.two_aside').fadeOut();
      $('.sidepanel').fadeIn();
    }
  });*/


