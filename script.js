// Cache the DOM 
var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var poza = document.querySelector("img")

var asteptari = document.getElementById("asteptari")

var body = document.querySelector("body")


// Add event on click
button.addEventListener("click", altaViata)

// Define functons
function altaViata() {
	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Microsoft"
	asteptari.innerHTML = "<ul><li>Libertate financiara</li></ul>"
	poza.src = "images/lupusinguratic.jpg"
	poza.style.opacity = "70%"
	poza.style.border = "5px solid black"
	poza.style.width = "300px"
	poza.style.height = "200px"
	body.backgroundColor = "blue"
}