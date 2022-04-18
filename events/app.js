const gamingSection = document.getElementById("gaming");
const coreSection = document.getElementById("core-events");
const openEventSection = document.getElementById("open-events");
const codingSection = document.getElementById("coding");

const gameBtn = document.getElementById("gaming-btn");
const coreBtn = document.getElementById("core-btn");
const openBtn = document.getElementById("open-btn");
const codingBtn = document.getElementById("coding-btn");

const eventBtn = document.querySelectorAll(".event-btn");
const cards = document.querySelectorAll(".card-container");

eventBtn.forEach(function triggerEventChoice(element) {
	element.addEventListener("click", () => displayEventsCard(element));
});

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
		default:
			console.log("error");
	}
}

function changeMobileSec(){
	const cardId = document.getElementById('selectedSection').value;
	//alert(cardId);
	switch (cardId) {
		case "gaming":
			gamingSection.classList.remove("display-none");
			hideEventCards("gaming");
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
		default:
			console.log("error");
	}

}

function hideEventCards(exceptionCardId) {
	for (let index = 0; index < 4; index++) {
		if (cards[index].id === exceptionCardId) {
			continue;
		} else {
			cards[index].classList.add("display-none");
		}
	}
}

function eventRedirect(e){
alert(e.id)
}
