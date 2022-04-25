import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

//("use strict");
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
		window.location = "http://127.0.0.1:5500/profile/index.html";
		document.getElementById("discordLink").addEventListener('click',function(){
			document.getElementById("discordLink").href = 'https://discord.gg/hp5nwTsvsS';
		});

	} else {
		console.log("not user");

		document.getElementById("discordLink").addEventListener('click',function(){
			document.getElementById('modal').classList.remove('hidden');
			document.getElementById('overlay').classList.remove('hidden');
			document.getElementById('body').classList.add('--lock-body');
		});

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
			document.querySelector("body").classList.remove("--lock-body");
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
	}
});

console.log("btnOpenModal", btnOpenModal);
