// import required functions
import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const loginBtn = document.querySelector(".login-btn");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
	if (user) {
		loginBtn.innerHTML = `<a title="Account" id="nav-link-account">
		<img src="./assets/navbar/nav-icon-button-account.svg" alt="Account">
		</a>`;
		console.log("user");
	} else {
		loginBtn.innerHTML = `<a title="Account" id="login-btn-border" >Login
		</a>`;
		loginBtn.style.padding = "0";
		console.log("not user");
		document
			.getElementById("login-btn-border")
			.addEventListener("click", function (e) {
				document.getElementById("modal").classList.toggle("hidden");
				document.getElementById("overlay").classList.toggle("hidden");
				document.querySelector("body").classList.toggle("--lock-body");
				console.log("clicked ");
			});
	}
});
