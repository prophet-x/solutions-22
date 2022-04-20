const eventCard = document.querySelector(".card-wrapper");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = eventCard.scrollHeight;
eventCard.addEventListener("scroll", function scrollToBottom() {
	let newProgressHeight = (eventCard.scrollTop / totalPageHeight) * 100 * 2.5;
	progressBar.style.height = `${newProgressHeight}%`;
	progressBar.style.opacity = `${newProgressHeight}%`;
});

const eventReg = document.querySelector('.event-reg');
eventReg.addEventListener('click',function(){
	
});

