// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
let ArrT = "";
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = "";


let Arr1 = ["turkey ", "Mom ","dad ","dog ","teacher "];
let Arr2 = ["sat on ", "ate ","danced ","saw ","like "];
let Arr3 = ["a funny ", "a scary ","a goofy ","a barking ","a fat "];
let Arr4 = ["goat ", "Monkey ","fish ","cow ","bug "];
let Arr5 = ["on the moon", "on the chair","on the grass","in my soup","in my shoe"];

var speakButton = document.querySelector('button');



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	textToSpeak = ArrT;
	speakNow(textToSpeak);
}


function Noun() {
	ArrT += Arr1[Math.floor(Math.random()* Arr1.length)].toString();
	console.log(ArrT);
}

 function Verb() {
	ArrT += Arr2[Math.floor(Math.random()* (Arr2.length))];
	console.log(ArrT);
}
	function Adjetive() {
	ArrT += Arr3[Math.floor(Math.random()* (Arr3.length))];
	console.log(ArrT);
}
 	function Noun2() {
	ArrT += Arr4[Math.floor(Math.random()* (Arr4.length))];
	console.log(ArrT);
}
 	function Place() {
	ArrT += Arr5[Math.floor(Math.random()* (Arr5.length))];
	console.log(ArrT);
}