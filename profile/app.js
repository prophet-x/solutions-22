import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const logoutBtn = document.querySelector(".logout-btn");

const auth = getAuth();

const signOutUser = () => {
	signOut(auth)
		.then(() => {
			console.log("Sign-out successful");
			window.location = "../index.html";
		})
		.catch((error) => {
			console.log("Sign-out un-successful", error);
			// An error happened.
		});
};

logoutBtn.addEventListener("click", signOutUser);
