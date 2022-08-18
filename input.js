// Cursor
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursorinner.style.left = x + "px";
	cursorinner.style.top = y + "px";
});

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
	var playButton = document.getElementById("playFeedGame");
	playButton.style.display = "block";

	playButton.addEventListener("mouseover", () => {
		cursor.classList.add("hover");
	});
	playButton.addEventListener("mouseleave", () => {
		cursor.classList.remove("hover");
	});

	playButton.addEventListener("click", () => {
		if (game.state == "idle") game.startGame();
		playButton.remove();
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
