/*
  ECORE Design
  by Edward Margallo
  contact@ecore.design
*/

document.addEventListener("DOMContentLoaded", function () {

	// toggle mobile nav icon
	if (!!document.querySelector(".hfe-nav-menu-icon")) {

		let yCoordinate;
		let navIcon = document.querySelector(".hfe-nav-menu-icon");

		window.onscroll = function () {
			yCoordinate = window.scrollY; // Value of scroll Y in px
			// console.log(yCoordinate);
			navIconToggle();
		};

		var navIconToggle = function () {
			// console.log(navIcon.getBoundingClientRect());
			if (yCoordinate >= 100) {
				navIcon.classList.remove('show');
				navIcon.classList.add('hide');
			} else {
				navIcon.classList.remove('hide');
				navIcon.classList.add('show');
			}
		}
	}

	// if home page
	// just use the wordpress home class
	if (document.body.classList.contains('home')) {
		// do something
	}

	// check what page we are on
	// to only execute scripts when needed
	let url = window.location.href;

	// bitnami wordpress root url hack
	// quick href check for root
	if (url.includes("localhost") || url.includes("127.")) {

		let elements = document.querySelectorAll("a");
		Array.prototype.forEach.call(elements, function (el, i) {

			let pathname = el.getAttribute("href");

			if (el.getAttribute("href") === "/") {
				el.setAttribute("href", "/wordpress/");
			} else if (!pathname.startsWith("/wordpress/") &&
				!pathname.startsWith("#") &&
				!pathname.startsWith("mailto") &&
				!pathname.startsWith("https://") &&
				!pathname.startsWith("http://") &&
				!pathname.startsWith("//")
			) {
				el.setAttribute("href", "/wordpress" + pathname);
			}
		});
	}


	// if contact page
	if (url.includes('/contact')) {
		// do something
	}

	// if portfolio section
	if (url.includes('/portfolio/')) {
		// do something
	}
});