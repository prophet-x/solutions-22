window.addEventListener("DOMContentLoaded", function () {
	const navButton = document.querySelector("#mobile-nav-menu");

	navButton.addEventListener("click", function () {
		this.parentElement.classList.toggle("--open");
	});
});