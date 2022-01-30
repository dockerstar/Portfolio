
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


$("a[href^='#']").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

/*
$(document).ready(function(){
function validateForms(form){
  $(form).validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Пожалуйста введите свое имя",
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Неправильно введен адрес почты"
      }
    }
  }
  );
}

validateForms('#contacts form');
});
*/
$(document).ready(function(){
$('form').submit(function(e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    /*$('#consultat, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');*/

    $('form').trigger('reset');
  });
  return false;
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


