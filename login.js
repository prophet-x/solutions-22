// import required functions
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	signOut,
	sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	setDoc,
	query,
	where,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");

const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

const register = document.querySelector(".register");
const login = document.querySelector(".elogin");
// const sOut = document.querySelector(".sign-out");
const googleLogin = document.querySelector(".glogin");
const googleSignUp = document.querySelector(".google-reg");

const loginUserNameValue = document.querySelector(".email");
const loginPasswordValue = document.querySelector(".password");
const forgotPassword = document.querySelector(".forgot-password");

const userNameValue = document.querySelector(".username-value");
const collegeValue = document.querySelector(".college-value");
const mailValue = document.querySelector(".mail-value");
const passwordValue = document.querySelector(".password-value");

// grab the form and prevent default behaviour which is sending PHP request
const form = document.querySelector(".register-form");
form.onsubmit = function (e) {
	e.preventDefault();
};
const writeUserData = async (user) => {
	try {
		const docRef = doc(db, "users", user.uid);
		await setDoc(docRef, {
			userName: user.displayName,
			mail: user.email,
		});
	} catch (error) {}
};

getRedirectResult(auth)
	.then((result) => {
		const user = result.user;
		writeUserData(user);
		console.log("data written through redirect");
	})
	.catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
	});

const writeUserDataForRegisteration = async (
	user,
	userNameValue,
	collegeValue,
	mailValue
) => {
	const docRef = doc(db, "users", user.uid);
	await setDoc(docRef, {
		userName: userNameValue.value,
		college: collegeValue.value,
		mail: mailValue.value,
	});
};

const registerUser = () => {
	const emailValue = mailValue.value;
	const passwordCode = passwordValue.value;

	createUserWithEmailAndPassword(auth, emailValue, passwordCode)
		.then((userCredential) => {
			const user = userCredential.user;
			sendEmailVerification(auth.currentUser).then(() => {
				alert("VERIFICATION MAIL SENT");
				writeUserDataForRegisteration(
					user,
					userNameValue,
					collegeValue,
					mailValue
				);
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
		});
};

const loginUser = () => {
	const emailValue = document.querySelector(".login-email");
	const passwordCode = document.querySelector(".login-password");
	const user = auth.currentUser;
	signInWithEmailAndPassword(auth, emailValue.value, passwordCode.value)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	if (!user.emailVerified) {
		alert("login success");
	}
};

const loginByGoogle = () => {
	signInWithRedirect(auth, provider).then((result) => {
		console.log("sign in result", result);
	});
};

const updateUserData = () => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
};

const signOutUser = () => {
	signOut(auth)
		.then(() => {})
		.catch((error) => {
			alert(error.errorMessage);
			// An error happened.
		});
};

const resetPassword = () => {
	let email = window.prompt("Enter your email: ");
	sendPasswordResetEmail(auth, email)
		.then(() => {
			// Password reset email sent!
			// ..
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
			// ..
		});
};

register.addEventListener("click", registerUser);
login.addEventListener("click", loginUser);
forgotPassword.addEventListener("click", resetPassword);
googleLogin.addEventListener("click", loginByGoogle);
googleSignUp.addEventListener("click", loginByGoogle);
updateUserData();

logoutBtn.addEventListener("click", signOutUser);

const profileIcon = document.querySelector("#nav-link-account");

onAuthStateChanged(auth, (user) => {
	if (user) {
		profileIcon.classList.add("--logged-in");
		profileIcon.classList.remove("show-modal");
	} else {
		profileIcon.classList.remove("--logged-in");
		// User is signed out
		// ...
	}
});
