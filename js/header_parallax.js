(function() {
  'use strict';

  window.addEventListener("scroll", function() {
    if (window.scrollY < 700) {
      const item = document.querySelector("header");
      item.style.transform = 'translateY(' + (window.scrollY * 0.5) + 'px)';
    }
  });

})();