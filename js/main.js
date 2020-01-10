// this is a self-invoking anonymous function
// also called an IIFE
// also called a module

(() => {

	console.log("some message - from JavaScript");

	// find the button element on the page by its id with JavaScript
	let theButton = document.querySelector("#myButton"),
		theHeading = document.querySelector('h1'),
		svgImage = document.querySelector('#svg-graphic');

	// this function changes the heading text
	function changeText() {
		theHeading.textContent = "Hello there from the console";
	}

	// log the id of the svg to the console when a user hovers on it
	function logoSVG() {
		console.log(this.id);
	}

	theButton.addEventListener("click", changeText);
	svgImage.addEventListener("mouseover", logoSVG);

})();