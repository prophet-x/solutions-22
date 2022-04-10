window.addEventListener("DOMContentLoaded", function () {
	const navButton = document.querySelector("#mobile-nav-menu");

	navButton.addEventListener("click", function () {
		
		this.parentElement.classList.toggle("--open");
		document.querySelector('main').classList.toggle("--blur");
		document.querySelector('footer').classList.toggle("--blur");
		document.querySelector('body').classList.toggle("--lock-body");
	});

	
});



document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('mobile-nav-menu');

    if (!container.contains(e.target) && document.querySelector('nav').classList.contains('--open')) {
		document.querySelector('nav').classList.toggle('--open');
		document.querySelector('main').classList.toggle("--blur");
		document.querySelector('footer').classList.toggle("--blur");
		document.querySelector('body').classList.toggle("--lock-body");
    }
}.bind(this));