/**********************
 * Antony Morales Rosas
 * August 2022
 * Main game clases
 * *********************/

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
		ballArray = getRandomBalls(40);
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
		ctx.strokeStyle = "#3f3f3f";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	}

	update() {
		// Bounce bottom
		if (this.position.y + this.radius + 2 + this.dy > canvas.height) {
			this.dy = -this.dy * this.friction * this.mass;
			this.dx *= this.friction * this.mass;
		} else {
			this.dy += Physics.gravity;
		}

		// Bounce left and rigth
		if (this.position.x + this.radius + 2 + this.dx > canvas.width || this.position.x + this.dx < 0) {
			this.dx = -this.dx * this.friction * this.mass;
		}

		this.position.y += this.dy;
		this.position.x += this.dx;
	}
}

function getRandomBalls(spawnNumber) {
	this.ballArray = [];
	this.min = 0;
	this.max = canvas.with;

	for (var i = 0; i < spawnNumber; i++) {
		var x = Random.range(0, canvas.width);
		var y = Random.range(-300, 30);
		var dy = Random.range(0.3, 4);
		var dx = Random.range(-5, 5);
		ballArray.push(new Ball(x, y, 18, dx, dy));
	}

	return this.ballArray;
}
