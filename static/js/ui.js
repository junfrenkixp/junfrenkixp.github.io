(function() {
	function mobileMenu() {
		const body = document.querySelector("body");
		const nav = document.querySelector(".nav-menu");
		const navLink = document.querySelectorAll(".nav-menu a");
		const btn = document.querySelector(".nav-menu__mobile-button");

		btn.addEventListener("click", () => {
			nav.classList.toggle("active");
			body.classList.toggle("overflow");
			for (let i = 0; i < navLink.length; i++) {
				navLink[i].addEventListener("click", () => {
					nav.classList.remove("active");
					body.classList.remove("overflow");
				});
			}
		});
	}
	mobileMenu();

	function headerParallax() {
		window.addEventListener("scroll", function() {
			if (window.scrollY < 700) {
				const item = document.querySelector("header");
				item.style.transform = "translateY(" + window.scrollY * 0.5 + "px)";
			}
		});
	}
	headerParallax();
})();
