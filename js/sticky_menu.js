(function() {
  'use strict';

  const navMenu = document.querySelector('.nav_menu');
  function stickyMenu() {
    let scrolled = window.pageYOffset;
    if (scrolled > 200) {
      navMenu.classList.add('nav_menu-sticky');
    }
    if (scrolled < 200) {
      navMenu.classList.remove('nav_menu-sticky');
    }
  }
  window.addEventListener("scroll", stickyMenu);
  
})();