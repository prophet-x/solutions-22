const gamingSection = document.getElementById("gaming");
const coreSection = document.getElementById("core-events");
const openEventSection = document.getElementById("open-events");
const codingSection = document.getElementById("coding");
const roboticsSection = document.getElementById("robotics");
const isdfSection = document.getElementById("cybersecurity");

const gameBtn = document.getElementById("gaming-btn");
const coreBtn = document.getElementById("core-btn");
const openBtn = document.getElementById("open-btn");
const codingBtn = document.getElementById("coding-btn");

const eventBtn = document.querySelectorAll(".event-btn");
const cards = document.querySelectorAll(".card-container");

const navbar = document.querySelector(".navbar");
console.log("navbar", navbar);
navbar.children[0].addEventListener("click", function () {
	navbar.classList.toggle("--open");
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

function openSection(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

eventBtn.forEach(function triggerEventChoice(element) {
	element.addEventListener("click", () => displayEventsCard(element));
});

function eventRedirect(e) {
	window.open("../eventRegestration/index.html?eventID=" + e.id, "_blank");
}

function displayEventsCard(eventBtn) {
	const cardId = eventBtn.id;
	switch (cardId) {
		case "gaming-btn":
			gamingSection.classList.remove("display-none");
			hideEventCards("gaming");
			break;
		case "core-btn":
			coreSection.classList.remove("display-none");
			hideEventCards("core-events");
			break;
		case "open-btn":
			openEventSection.classList.remove("display-none");
			hideEventCards("open-events");
			break;
		case "coding-btn":
			codingSection.classList.remove("display-none");
			hideEventCards("coding");
			break;
		case "robotics-btn":
			roboticsSection.classList.remove("display-none");
			hideEventCards("robotics");
			//   console.log("robotics");
			break;
		case "isdf-btn":
			isdfSection.classList.remove("display-none");
			hideEventCards("cybersecurity");
			break;
		default:
			console.log("error");
	}
}

function changeMobileSec() {
	const cardId = document.getElementById("selectedSection").value;
	//   alert(cardId);
	switch (cardId) {
		case "gaming":
			gamingSection.classList.remove("display-none");
			hideEventCards("gaming");
			break;
		case "isdf":
			isdfSection.classList.remove("display-none");
			hideEventCards("cybersecurity");
			break;
		case "core":
			coreSection.classList.remove("display-none");
			hideEventCards("core-events");
			break;
		case "open":
			openEventSection.classList.remove("display-none");
			hideEventCards("open-events");
			break;
		case "coding":
			codingSection.classList.remove("display-none");
			hideEventCards("coding");
			break;
		case "robotics":
			roboticsSection.classList.remove("display-none");
			hideEventCards("robotics");
			break;
		default:
			console.log("error");
	}
}

function hideEventCards(exceptionCardId) {
	for (let index = 0; index < cards.length; index++) {
		if (cards[index].id === exceptionCardId) {
			continue;
		} else {
			cards[index].classList.add("display-none");
		}
	}
}
