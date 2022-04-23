import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

("use strict");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("user");
		loginBtn.classList.add("--logged-in");
		loginBtn.classList.remove("show-modal");
		loginBtn.href = "./profile/index.html";
	} else {
		console.log("not user");
		loginBtn.addEventListener("click", function (e) {
			document.getElementById("modal").classList.toggle("hidden");
			document.getElementById("overlay").classList.toggle("hidden");
			document.querySelector("body").classList.toggle("--lock-body");
			console.log("clicked ");
		});

		for (let i = 0; i < btnOpenModal.length; i++)
			btnOpenModal[i].addEventListener("click", function () {
				console.log("Button clicked");
				modal.classList.remove("hidden");
				overlay.classList.remove("hidden");
			});

		const closeModal = function () {
			modal.classList.add("hidden");
			overlay.classList.add("hidden");
		};

		btnCloseModal.addEventListener("click", closeModal);

		overlay.addEventListener("click", closeModal);

		//HANDLING ESC BUTTON

		document.addEventListener("keydown", function (e) {
			// console.log('A key was pressed');
			// console.log(e);   //which key was pressed
			console.log(e.key); //accesing key property

			if (e.key === "Escape") {
				if (!modal.classList.contains("hidden")) closeModal();
			}
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
				tablinks[i].className = tablinks[i].className.replace(
					" active",
					""
				);
			}

			// Show the current tab, and add an "active" class to the button that opened the tab
			document.getElementById(cityName).style.display = "block";
			evt.currentTarget.className += " active";
		}
	}
});

console.log("btnOpenModal", btnOpenModal);
