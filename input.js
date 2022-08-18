function canvasEvents(canvas) {
	// Resize Window
	addEventListener("resize", (event) => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight * 0.75;
	});
}

function monsterEvents(monster){
	monster.div.style.opacity = 0;
	monster.div.style.zIndex = -2;

	// Resize Window
	addEventListener("resize", (event) => {
		monster.width = monster.div.width-40;
		monster.height = monster.div.height - 80;

		if(canvas.width <= 600){
			monster.position.x = canvas.width / 2 - monster.width/2;
			monster.position.y = canvas.height / 2  - monster.height/2 - 20;
		}else{
			monster.position.x = canvas.width / 2 - monster.width - monster.width/2 -35;
			monster.position.y = canvas.height / 2  - monster.height/2;
		}

	});
}

function gameEvents(game) {
	// Play Button
	var playButton = document.getElementById("playFeedGame");
	playButton.style.display = "block";

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
		if (mouse) console.log(mouse);
	});

	addEventListener("mouseup", (event) => {
		console.log("leaver");
	});
}
