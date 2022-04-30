// import required functions
import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const loginBtn = document.querySelector("#nav-link-account");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("user");
		loginBtn.classList.add("--logged-in");
		//window.location = "http://solutions22.in/profile/index.html";
	} else {
		console.log("not user");
		loginBtn.addEventListener("click", function (e) {
			document.getElementById("modal").classList.remove("hidden");
			document.getElementById("overlay").classList.remove("hidden");
			document.querySelector("body").classList.remove("--lock-body");
			console.log("clicked ");
		});
	}
});
