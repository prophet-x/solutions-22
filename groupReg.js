import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'
import { getFirestore, collection, doc, addDoc, setDoc, query, where, getDoc, getDocs, arrayUnion, updateDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
const auth = getAuth();
const db = getFirestore();

const leaderReg = document.querySelector('.leader-reg');
const memberReg = document.querySelector('.member-reg');

const registerLeader = async () => {
	// create doc with leader as first entry
	const user = auth.currentUser;
	const docRef = await addDoc(collection(db, 'groups'), {
		member: [
			{
				userName: user.displayName,
				mail: user.email,
				ref: doc(db, 'users', user.uid)
			}
		]
	});
	// add leader in event collection
	await setDoc(doc(db, 'events', 'matrix', 'registered-groups', docRef.id), {
		member: [
			{
				userName: user.displayName,
				mail: user.email,
				ref: doc(db, 'users', user.uid)
			}
		]
	});
	// display group id to add further members in group
	console.log('Your group ID is', docRef.id);
}

const registerMember = async () => {
	try {
		const user = auth.currentUser;
		// add member in the leader doc
		// pass group id so as to add members in desired group
		await updateDoc(doc(db, 'groups', '51ph65cB99XA1zi2DQhz'), {
			member: arrayUnion({
				userName: user.displayName,
				mail: user.email,
				ref: doc(db, 'users', user.uid)
			})
		});
		await updateDoc(doc(db, 'events', 'matrix', 'registered-groups', '51ph65cB99XA1zi2DQhz'), {
			member: arrayUnion({
				userName: user.displayName,
				mail: user.email,
				ref: doc(db, 'users', user.uid)
			})
		});
		console.log('member registered');
	} catch (error) {
		console.log(error);
	}
}



leaderReg.addEventListener('click', registerLeader);
memberReg.addEventListener('click', registerMember);