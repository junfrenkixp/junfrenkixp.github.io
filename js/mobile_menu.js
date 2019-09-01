(function() {
  "use strict";

  const logoTwoLetters = document.querySelectorAll(".two_letters");
  const logo = document.getElementById("logo");
  const buttonBurger = document.querySelector(".mobile_nav-btn");
  const burgerMenuBurger = document.querySelectorAll(".mobile_nav-btn_elem");
  const mobileNavMenu = document.querySelector(".mobile_nav-menu");
  const body = document.querySelector("body");
  const mobileNavMenuLinks = document.querySelectorAll(
    ".mobile_nav-menu_links_anchors__link"
  );

  buttonBurger.addEventListener("click", function() {
    let scrolled = window.pageYOffset;
    if (mobileNavMenu) body.classList.toggle("no-scroll");
    if (scrolled > 1) {
      for (let i = 0; i < logoTwoLetters.length; i++) {
        logoTwoLetters[i].classList.add("two_letters--sticky");
      }
    }
    if (scrolled < 1) {
      for (let i = 0; i < logoTwoLetters.length; i++) {
        logoTwoLetters[i].classList.toggle("two_letters--sticky");
      }
    }
    mobileNavMenu.classList.toggle("mobile_nav-menu--active");
    buttonBurger.classList.toggle("mobile_nav-btn--active");
    for (let i = 0; i < burgerMenuBurger.length; i++) {
      burgerMenuBurger[i].classList.toggle("mobile_nav-btn_elem--active");
    }
  });

  function close() {
    buttonBurger.classList.remove("mobile_nav-btn--active");
    if (mobileNavMenu) body.classList.remove("no-scroll");
    mobileNavMenu.classList.remove("mobile_nav-menu--active");
  }

  for (let i = 0; i < mobileNavMenuLinks.length; i++) {
    mobileNavMenuLinks[i].addEventListener("click", close);
  }
  logo.addEventListener("click", close);
})();
