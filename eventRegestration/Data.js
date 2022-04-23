import { getFirestore, collection, doc, addDoc, setDoc, query, where, getDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
var eventArray = [
    "Code Red", // 0
    "Bug off", // 1
    "Reverse coding", // 2
    "only girls coding event", // 3
  
    
    "NAND IT", // 4
    "IMPEDENCE", // 5
  
  
    "Catia" , // 6
    "AutoCAD", // 7
  
  
    "CODM (BR & MP)", // 8
    "Valorant", // 9
    "clash royal", // 10
    "Free fire", // 11
  
  
    "Tech matrix", // 12
    "Sudoku tech", // 13
    "placement APTI", // 14
    "Rubix Cube", // 15
    "photoshop event for poster", // 16
    "Ad making" , // 17
    "photography", // 18
  
  
    "SCINTILLA-IGNITING MINDS",  // 19
    "ABHIKALPNA :BUDDY LOVE THE WAY YOU DESIGN", // 20
    "QUIZOTICS", // 21
    
  
  
    "Innovation Challenge: A Day in a Startup", // 22
    "Startup Challenge: A Day in a Startup", // 23
  
  
    "ByPass CTF", // 24
  
    "TROUBLESHOOTING THE ENCLOSURE", // 25
    "TECHSTORM", // 26
   ];
   var db = getFirestore();
  
  
  //getting course params 
  function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m,key,value) {
            vars[key] = value;     
        });
        return vars;   
    }
    var eventId = getUrlVars()["eventID"];

    const docRef = doc(db, "events", "codered");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const data = docSnap.data();
  document.getElementById('title').innerHTML = data.Title;
  document.getElementById('title').innerHTML = data.Title;
  document.getElementById('date').innerHTML = data.date;
  document.getElementById('time').innerHTML = data.time;
  document.getElementById('teamsize').innerHTML = data.date;
  document.getElementById('prizeWorth').innerHTML = data.prizeWorth;
  document.getElementById('descriptionUp').innerHTML = data.descriptionUp;
  document.getElementById('paragraph').innerHTML = data.paragraph;
  document.getElementById('descriptionDown').innerHTML = data.descriptionDown;
  
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  

  
  //var eventId = parseInt(chosenEventId);  // integer value to access the index
  //alert(eventId)
  // window.addEventListener("DOMContentLoaded", function () {
  //   eventDetails.forEach(function (data) {
  
  //       if( data.id === eventId) {
  //         document.getElementById('title').innerHTML = data.Title;
  //         document.getElementById('date').innerHTML = data.date;
  //         document.getElementById('time').innerHTML = data.time;
  //         document.getElementById('teamsize').innerHTML = data.date;
  //         document.getElementById('prizeWorth').innerHTML = data.prizeWorth;
  //         document.getElementById('descriptionUp').innerHTML = data.descriptionUp;
  //         document.getElementById('paragraph').innerHTML = data.paragraph;
  //         document.getElementById('descriptionDown').innerHTML = data.descriptionDown;

  //       }
  //   });
  // });