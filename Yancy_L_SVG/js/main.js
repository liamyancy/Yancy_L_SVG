// this is a self-invoking anonymous function
// also called an IIFE
// also called a module

(() => {

	console.log("some message - from JavaScript");

	// find the button element on the page by its id with JavaScript
	let theButton = document.querySelector("#myButton"),
		theHeading = document.querySelector('h1'),
		//svgImage = document.querySelector('#svg-graphic'),
		allSVGs = document.querySelectorAll('.svg');

	// this function changes the heading text
	function changeText() {
		theHeading.textContent = "Hello there from the console";
	}

	// log the id of the svg to the console when a user hovers on it
	function logoSVG() {
		console.log(this.id);
	}

	theButton.addEventListener("click", changeText);
	//svgImage.addEventListener("click", logoSVG);
	//svgImage2.addEventListener("click", logoSVG);
	
	//loop through the collection and apply our event for each element
	allSVGs.forEach(item => item.addEventListener('click', logoSVG));

})();