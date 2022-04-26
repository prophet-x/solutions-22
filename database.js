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
	updateDoc,
	arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();

const eventReg = document.querySelector(".event-reg");

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(
		/[?&]+([^=&]+)=([^&]*)/gi,
		function (m, key, value) {
			vars[key] = value;
		}
	);
	return vars;
}

const eventID = getUrlVars()["eventID"];

const registerForEvent = async () => {
	const user = auth.currentUser;

	const eventName = getUrlVars()["eventID"];

	// update user collection with event data
	if (!user) {
		document.getElementById("modal").classList.remove("hidden");
		document.getElementById("overlay").classList.remove("hidden");
		document.querySelector("body").classList.remove("--lock-body");
	}

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

		switch (eventID) {
			case "bgmi":
				window.open("https://forms.gle/qqgHB6hPjYxiVkGt7", "_blank");
				break;
			case "valorant":
				window.open("https://forms.gle/vhbxx2wT1Py1mR1B8", "_blank");
				break;
			case "clashRoyale":
				window.open("https://forms.gle/GPyULSWTjrLLnxov5", "_blank");
				break;
			default:
				break;
		}
		alert_creator("Successfully Registered for the event.");
	} else {
		alert("VERIFY YOUR EMAIL");
	}
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
