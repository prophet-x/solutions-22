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

document.getElementById('nav-link-account').addEventListener('click',function(e){
	document.getElementById('modal').classList.toggle('hidden');
	document.getElementById('overlay').classList.toggle('hidden');
	document.querySelector('body').classList.toggle("--lock-body");
});

document.getElementById('closeLoginModal').addEventListener('click',function(e){
	document.getElementById('modal').classList.toggle('hidden');
	document.getElementById('overlay').classList.toggle('hidden');
	document.querySelector('body').classList.toggle("--lock-body");
});

function openSection(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }