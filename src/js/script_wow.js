


// $(document).ready(function(){
//   const aside = document.querySelector('.sidepanel__text');
//     $(window).scroll(function() {
//       var top = $(this).scrollTop();
//       if ( top >= 400) {
//         aside.style.color = '#000000';
//       } else if ( top <= 200) {
//         aside.style.color = '#FFFFFF';
//       }
//     });
//     window.addEventListener("scroll", runOnScroll);
//   });

// function runOnScroll() {
//   if (document.body.scrollTop >= 200) {
//    var aside = document.getElementById("aside_span")[0];
//     aside.style.color = "green";
//     }
// }; 
// window.addEventListener("scroll", runOnScroll);

// var myNav = document.querySelector('.sidepanel__text');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("aside_color");
//         // myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         // myNav.classList.add("nav-transparent");
//         myNav.classList.remove("aside_color");
//     }
// };

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.two_aside').fadeIn();
    $('.sidepanel').fadeOut();
  } else {
    $('.two_aside').fadeOut();
    $('.sidepanel').fadeIn();
  }
});