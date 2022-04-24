let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".container");
let form = document.querySelector(".formReg");
let formButtons = document.querySelector(".formButtons");

// logic for clicking on register button on Event registration page
let button = document.querySelector("#regDiv");
button.addEventListener("click", registerClicked);

function registerClicked() {
    div1.style.display = 'none';
    div2.style.display = 'block';
    console.log(div1, div2);
}
// --------------------------end of logic--------------------

// logic for clicking on "register as member" button on popup
let memberButton = document.querySelector("#memberBtn");
memberButton.addEventListener("click", memberBtnClicked);

function memberBtnClicked() {
    form.style.display = 'block';
    formButtons.style.display = 'none';
    console.log(form);
}
// --------------------------end of logic--------------------

//logic for clicking on "X" button on popup
let closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeClicked);

function closeClicked() {
    div1.style.display = 'grid';
    div2.style.display = 'none';
    form.style.display = 'none';
    formButtons.style.display = 'block';
}
// --------------------------end of logic--------------------