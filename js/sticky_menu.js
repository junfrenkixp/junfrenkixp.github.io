(function() {
  "use strict";

  const navMenu = document.querySelector(".nav_menu");
  const logoTwoLetters = document.querySelectorAll(".two_letters");
  const navMenuLinks = document.querySelectorAll(".nav_menu-links a");
  const burgerMenuBurger = document.querySelectorAll(".mobile_nav-btn_elem");
  function stickyMenu() {
    let scrolled = window.pageYOffset;
    if (scrolled > 1) {
      navMenu.classList.add("nav_menu-sticky");
      for (let i = 0; i < logoTwoLetters.length; i++) {
        logoTwoLetters[i].classList.add("two_letters--sticky");
      }
      for (let i = 0; i < navMenuLinks.length; i++) {
        navMenuLinks[i].style.color = "#2D3238";
      }
      for (let i = 0; i < burgerMenuBurger.length; i++) {
        burgerMenuBurger[i].style.backgroundColor = "#2D3238";
      }
    }
    if (scrolled < 1) {
      navMenu.classList.remove("nav_menu-sticky");
      for (let i = 0; i < logoTwoLetters.length; i++) {
        logoTwoLetters[i].classList.remove("two_letters--sticky");
      }
      for (let i = 0; i < navMenuLinks.length; i++) {
        navMenuLinks[i].style.color = "";
      }
      for (let i = 0; i < burgerMenuBurger.length; i++) {
        burgerMenuBurger[i].style.backgroundColor = "";
      }
    }
  }
  window.addEventListener("scroll", stickyMenu);
})();
