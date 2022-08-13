function canvasEvents(canvas) {
	// Resize Window
	addEventListener("resize", (event) => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight * 0.75;
	});
}

function gameEvents(game) {
	document.getElementById("playFeedGame").addEventListener("click", () => {
		if (game.state == "idle") game.startGame();
	});
}

function mouseEvents(mouse) {
	// Event Listeners
	addEventListener("mousemove", (event) => {
		mouse.position.x = event.clientX;
		mouse.position.y = event.clientY - 75;
	});

	addEventListener("mousedown", (event) => {
		if (mouse) console.log(mouse);
	});

	addEventListener("mouseup", (event) => {
		console.log("leaver");
	});
}
