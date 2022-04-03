// import required functions 
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'
import { getFirestore, collection, doc, addDoc, setDoc, query, where, getDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();


const email = document.querySelector('.email');
const password = document.querySelector('.password');
const register = document.querySelector('.register');
const login = document.querySelector('.login');
const sOut = document.querySelector('.sign-out');
const googleLogin = document.querySelector('.google-login');
email.value = 'risabhrai2001@gmail.com';
password.value = '123456789';


// grab the form and prevent default behaviour which is sending PHP request
const form = document.querySelector('.register-form');
form.onsubmit = function (e) {
	e.preventDefault();
}

const writeUserData = async (user) => {
	await setDoc(doc(db, 'users', user.uid), {
		userName: user.displayName,
		college: '',
		mail: user.email
	});
}

const registerUser = () => {
	const emailValue = email.value;
	const passwordValue = password.value;

	createUserWithEmailAndPassword(auth, emailValue, passwordValue)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log('USER', user);
			sendEmailVerification(auth.currentUser)
				.then(() => {
					console.log('VERIFICATION MAIL SENT');
				});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('error message', errorMessage);
		})
}

const loginUser = () => {
	const user = auth.currentUser;
	if (user.emailVerified) {
		signInWithEmailAndPassword(auth, email.value, password.value)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('SIGNED IN', user);
				// grab data from registeration form and pass it as arguments for writing user data 
				writeUserData(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log('ERROR', errorMessage);
			});
	}
	else {
		console.log('get email verified');
	}
}

const loginByGoogle = () => {

	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log('GOOGLE SIGN IN SUCCESSFUL', user);
			// pass required data as arguments to this function to write user data
			writeUserData(user);
			// ...
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
}

const updateUserData = () => {

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			console.log('ON AUTH STATE CHANGE EVENT FIRED', user);
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
}

const signOutUser = () => {
	signOut(auth).then(() => {
		console.log('Sign-out successful');
	}).catch((error) => {
		console.log('Sign-out un successful', error);
		// An error happened.
	});
}

register.addEventListener('click', registerUser);
login.addEventListener('click', loginUser);
googleLogin.addEventListener('click', loginByGoogle);
updateUserData();

sOut.addEventListener('click', signOutUser);