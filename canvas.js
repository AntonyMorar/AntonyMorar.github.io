// Canvas
canvas = document.getElementById("head-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.75;
ctx = canvas.getContext("2d");

// Variables
var mouse = {
	x: canvas.width / 2,
	y: canvas.height / 2,
};

var colors = ["#5ff4a4", "#ffbc2f", "#4f7cf7", "#f74f4f", "#b567ca"];

// Event Listeners
addEventListener("mousemove", (event) => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", (event) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.75;

    init();
});

// Utility functions
function randomColor(colors){
	return colors[Math.floor(Math.random() * colors.length)]
}
