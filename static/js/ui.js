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

	function stickyMenu() {
		let scrolled = window.pageYOffset;
		const navContainer = document.querySelector(".nav-container");
		if (scrolled > 300) {
			navContainer.classList.add("sticky");
		}
		if (scrolled < 300) {
			navContainer.classList.remove("sticky");
		}
	}
	window.addEventListener("scroll", stickyMenu);

	const navbarLinks = document.querySelectorAll(".nav-menu a");
	for (let i = 0; i < navbarLinks.length; i++) {
		navbarLinks[i].addEventListener("click", smoothScroll);
	}
	function smoothScroll(event) {
		const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
		const targetPosition = document.querySelector(targetId).offsetTop;
		const startPosition = window.pageYOffset;
		const distance = targetPosition - 100 - startPosition;
		const duration = 1000;
		let start = null;
		window.requestAnimationFrame(step);
		function step(timestamp) {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
			if (progress < duration) window.requestAnimationFrame(step);
		}
	}
	function easeInOutCubic(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t * t + b;
		t -= 2;
		return (c / 2) * (t * t * t + 2) + b;
	}
})();
