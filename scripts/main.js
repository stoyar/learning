var myImage = document.querySelector("img");
myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/cat-1.jpg") {
		myImage.setAttribute ("src","images/cat-2.jpg");
	} else {
		myImage.setAttribute ("src","images/cat-1.jpg");
	}}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
	var myName = prompt("Пожалуйста, введите ваше имя");
	localStorage.setItem("name", myName);
	myHeading.innerHTML = "Шикарный котЭ " + myName; 
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.innerHTML = "Шикарный котЭ " + storedName;
}

myButton.onclick = function() {
	setUserName();
}
