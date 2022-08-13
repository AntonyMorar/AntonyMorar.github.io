// Antony Adrian Morales Rosas
// Agosto 2022

var colors = ["#5ff4a4", "#ffbc2f", "#4f7cf7", "#f74f4f", "#b567ca"];

function _init() {
	// Canvas
	canvas = document.getElementById("head-canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.75;
	ctx = canvas.getContext("2d");
	canvasEvents(canvas);
	// Game
	game = new Game();
	gameEvents(game);
	// input
	mouse = new Mouse(canvas.width / 2, canvas.height / 2);
	mouseEvents(mouse);
	// Objects
	monster = new Monster();
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

	monster.draw();
	ballArray.forEach((ball) => {
		ball.draw();
	});
}

class Game {
	constructor() {
		// Singleton -----------
		if (!!Game.instance) return Game.instance;
		Game.instance = this;
		// General ------
		this.state = "idle";
		this.points = 0;
	}
	ç;

	startGame() {
		this.state = "game";
		ballArray = getRandomBalls(30);
	}
}

class Mouse extends GameObject {
	constructor(x, y) {
		super(x, y);
	}

	update() {
		if (this.collision) {
			console.log("conllissiooon");
		}
	}
}

class Ball extends GameObject {
	constructor(x, y, radius, dx, dy) {
		super(x, y);
		this.id = Date.now() + Random.rangeInt(1000, 10000);
		this.radius = radius;
		this.dx = dx;
		this.dy = dy;
		this.mass = 1;
		this.friction = 0.92;
		this.color = Random.randomColor(colors);
		this.actualColor = this.color;
		this.grabbed = false;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = this.actualColor;
		ctx.fill();
		ctx.closePath();
	}

	update() {
		//Mouse collide
		var distanceX = this.position.x - mouse.position.x - this.radius;
		var distanceY = this.position.y - mouse.position.y - this.radius;
		var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

		if (distance < this.radius) {
			this.actualColor = "#000";
		} else {
			this.actualColor = this.color;
		}

		if (!this.grabbed) {
			// Bounce bottom
			if (this.position.y + this.radius + this.dy > canvas.height) {
				this.dy = -this.dy * this.friction;
				this.dx *= this.friction;
			} else {
				this.dy += Physics.gravity;
			}

			// Bounce left and rigth
			if (this.position.x + this.radius + this.dx > canvas.width || this.position.x + this.dx < 0) {
				this.dx = -this.dx * this.friction;
			}

			this.position.y += this.dy;
			this.position.x += this.dx;
		} else {
			this.position.x = mouse.position.x + this.radius / 2;
			this.position.y = mouse.position.y + this.radius / 2;
		}
	}
}

class Monster extends GameObject {
	constructor(x, y) {
		super(x, y);
		this.image = new Image();
		this.image.src = "assets/images/principaImage.png";
		this.image.alt = "Main Image";
	}

	draw() {
		ctx.drawImage(this.image, canvas.width / 2 - 203 / 2, canvas.height / 2 - 262 / 2, 203, 262);
	}
}

function getRandomBalls(spawnNumber) {
	this.ballArray = [];
	this.min = 0;
	this.max = canvas.with;

	for (var i = 0; i < spawnNumber; i++) {
		var x = Random.range(0, canvas.width);
		var y = Random.range(-300, 30);
		var dy = Random.range(0.5, 3);
		var dx = Random.range(-4, 4);
		ballArray.push(new Ball(x, y, 18, dx, dy));
	}

	return this.ballArray;
}
