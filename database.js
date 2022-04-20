import { getFirestore, collection, doc, addDoc, setDoc, query, where, getDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'
const db = getFirestore();
const auth = getAuth();

const eventReg = document.querySelector('.event-reg');

const registerForEvent = async () => {
	const user = auth.currentUser;
	const eventName = eventReg.getAttribute('id');

	// update user collection with event data
	if (user.emailVerified) {
		await setDoc(doc(db, 'users', user.uid, eventName, user.uid), {
			eventID: eventName,
			eventName: eventName,
			time: new Date().toLocaleString()
		});

		// add user in event collection
		await setDoc(doc(db, 'events', eventName, 'registered-users', user.uid), {
			userName: user.displayName,
			email: user.email,
			ref: doc(db, 'users', user.uid)
		});
	}
	else {
		console.log('get email verified');
	}
	console.log('data written');
}

eventReg.addEventListener('click', registerForEvent);