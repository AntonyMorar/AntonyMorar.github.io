// Cursor
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousedown", function () {
	cursor.classList.add("click");
});

document.addEventListener("mouseup", function () {
	cursor.classList.remove("click");
});

a.forEach((item) => {
	item.addEventListener("mouseover", () => {
		cursor.classList.add("hover");
	});
	item.addEventListener("mouseleave", () => {
		cursor.classList.remove("hover");
	});
});

function canvasEvents(canvas) {
	// Resize Window
	addEventListener("resize", (event) => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - 100;
	});
}

function gameEvents(game) {
	// Play Button
	var playInstructions1 = document.getElementById("playInstructions1")
	var playButton = document.getElementById("playButton1");
	playButton.style.display = "block";
	playInstructions1.style.display = "block"

	playButton.addEventListener("mouseover", () => {
		cursor.classList.add("hover");
	});
	playButton.addEventListener("mouseleave", () => {
		cursor.classList.remove("hover");
	});

	playButton.addEventListener("click", () => {
		if (game.state == "idle") game.startGame();
		playButton.style.display = "none"
		playInstructions1.style.display = "none"
	});
}

function mouseEvents(mouse) {
	// Event Listeners
	addEventListener("mousemove", (event) => {
		mouse.position.x = event.clientX;
		mouse.position.y = event.clientY - 75;
	});

	addEventListener("mousedown", (event) => {
		
	});

	addEventListener("mouseup", (event) => {
		
	});
}
