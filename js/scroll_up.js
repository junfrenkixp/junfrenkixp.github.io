(function() {
  'use strict';

  const goTopBtn = document.querySelector('.footer_up-button');
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(backToTop, 0);
    } 
  }
  goTopBtn.addEventListener('click', backToTop);
  
})();