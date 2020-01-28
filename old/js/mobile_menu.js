(function() {
  "use strict";

  const body = document.querySelector("body");
  const logo = document.getElementById("logo");
  const logoTwoLetters = document.querySelectorAll(".two_letters");
  const burgerMenuButton = document.querySelector(".mobile_nav-btn");
  const burgerMenuButtonElements = document.querySelectorAll(".mobile_nav-btn_elem");
  const navMenu = document.querySelector(".nav_menu");
  const navMenuLinks = document.querySelector(".nav_menu-links");
  const navMenuAnchorsLinks = document.querySelectorAll(".nav_menu-links_anchors_link");
  const navMenuLangsLinks = document.querySelectorAll(".nav_menu-links_lang-links");
  const anchorLinks = [navMenuLangsLinks, navMenuAnchorsLinks, logoTwoLetters];

  function sticky() {
    const scrolled = window.pageYOffset;
    if (scrolled > 1) {
      navMenu.classList.add("nav_menu-sticky");
      for (let i = 0; i < anchorLinks.length; i++) {
        for (let j = 0; j < anchorLinks[i].length; j++) {
          anchorLinks[i][j].classList.add("mobile_menu-links--active");
        }
      }
      for (let i = 0; i < burgerMenuButtonElements.length; i++) {
        burgerMenuButtonElements[i].classList.add("mobile_menu-links--active-bg");
      }
    }
    if (scrolled < 1) {
      navMenu.classList.remove("nav_menu-sticky");
      for (let i = 0; i < anchorLinks.length; i++) {
        for (let j = 0; j < anchorLinks[i].length; j++) {
          anchorLinks[i][j].classList.remove("mobile_menu-links--active");
        }
      }
      for (let i = 0; i < burgerMenuButtonElements.length; i++) {
        burgerMenuButtonElements[i].classList.remove("mobile_menu-links--active-bg");
      }
    }
  }
  window.addEventListener("scroll", sticky);
  //
  burgerMenuButton.addEventListener("click", function() {
    navMenuLinks.classList.toggle("mobile_menu--active");
    if (burgerMenuButtonElements[0].classList.contains("mobile_menu-links--active-bg_child")) {
      for (let i = 0; i < anchorLinks.length; i++) {
        for (let j = 0; j < anchorLinks[i].length; j++) {
          anchorLinks[i][j].classList.toggle("mobile_menu-links--active");
        }
      }
      for (let i = 0; i < burgerMenuButtonElements.length; i++) {
        burgerMenuButtonElements[i].classList.toggle("mobile_menu-links--active-bg");
        burgerMenuButtonElements[i].classList.toggle("mobile_menu-links--active-bg_child");
      }
    } else {
      for (let i = 0; i < anchorLinks.length; i++) {
        for (let j = 0; j < anchorLinks[i].length; j++) {
          anchorLinks[i][j].classList.toggle("mobile_menu-links--active");
        }
      }
      for (let i = 0; i < burgerMenuButtonElements.length; i++) {
        burgerMenuButtonElements[i].classList.toggle("mobile_menu-links--active-bg");
        burgerMenuButtonElements[i].classList.toggle("mobile_menu-links--active-bg_child");
      }
    }
  });
  //
  function close() {
    for (let i = 0; i < anchorLinks.length; i++) {
      for (let j = 0; j < anchorLinks[i].length; j++) {
        anchorLinks[i][j].classList.remove("mobile_menu-links--active");
      }
    }
    for (let i = 0; i < burgerMenuButtonElements.length; i++) {
      burgerMenuButtonElements[i].classList.remove("mobile_menu-links--active-bg");
      burgerMenuButtonElements[i].classList.remove("mobile_menu-links--active-bg_child");
    }
    navMenuLinks.classList.remove("mobile_menu--active");
    if (navMenu) body.classList.remove("no-scroll");
  }
  for (let i = 0; i < navMenuAnchorsLinks.length; i++) {
    navMenuAnchorsLinks[i].addEventListener("click", close);
  }
  logo.addEventListener("click", close);
})();
