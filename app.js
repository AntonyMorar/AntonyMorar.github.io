// Antony Adrian Morales Rosas
// Agosto 2022

var colors = ["#5ff4a4", "#ffbc2f", "#4f7cf7", "#f74f4f", "#b567ca"];

function _awake() {
	// Canvas
	canvas = document.getElementById("head-canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
	ctx = canvas.getContext("2d");
	canvasEvents(canvas);
}
_awake();

function _init() {
	// Game
	game = new Game();
	gameEvents(game);
	// input
	mouse = new Mouse(canvas.width / 2, canvas.height / 2);
	mouseEvents(mouse);

	ballArray = [];

	// Update and Draw
	_update();
	_draw();
}

function _update() {
	requestAnimationFrame(() => _update());

	mouse.update();

	ballArray.forEach((ball) => {
		ball.update();
	});
}

function _draw() {
	requestAnimationFrame(() => _draw());
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ballArray.forEach((ball) => {
		ball.draw();
	});
}
