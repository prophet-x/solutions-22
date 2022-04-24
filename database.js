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
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();

const eventReg = document.querySelector(".event-reg");

const registerForEvent = async () => {
	const user = auth.currentUser;
	const eventName = getUrlVars()["eventID"];

	// update user collection with event data
	if (user.emailVerified) {
		await setDoc(doc(db, "users", user.uid, eventName, user.uid), {
			eventID: eventName,
			eventName: eventName,
			time: new Date().toLocaleString(),
		});

		// add user in event collection
		await setDoc(
			doc(db, "events", eventName, "registered-users", user.uid),
			{
				userName: user.displayName,
				email: user.email,
				ref: doc(db, "users", user.uid),
			}
		);
	} else {
		console.log("get email verified");
	}
	console.log("data written");
	alert_creator("Successfully Registered for the event.");
};

function alert_creator(msg) {
	var data =
		'<div class="alert alert-warning alert-dismissible " role="alert" > ' +
		msg +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close" id="cls-alrt"> \
			<span aria-hidden="true">&times;</span> \
		  </button> \
		</div>';
	document.getElementById("alert_container").innerHTML = data;
	document.getElementById("cls-alrt").onclick = function () {
		document.getElementById("alert_container").innerHTML = "";
	};
}

eventReg.addEventListener("click", registerForEvent);
