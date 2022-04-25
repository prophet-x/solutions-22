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

import {
	getFirestore,
	collection,
	collectionGroup,
	doc,
	addDoc,
	setDoc,
	query,
	where,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

const logoutBtn = document.querySelector(".logout-btn");

const profilePic = document.querySelector(".profile_pic");
const userName = document.querySelector(".user_name");
const userEmail = document.querySelector(".user_email");

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
	if (user) {
		profilePic.src = user.photoURL;
		userName.innerHTML = user.displayName;
		userEmail.innerHTML = user.email;
		const docID = user.uid;
		const q = await getDocs(collectionGroup(db, "users", docID));
		q.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());
		});
	}
});
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
