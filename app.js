// Antony Adrian Morales Rosas
// Agosto 2022

function _init() {
	// Objects
	testBall = new Ball(90, 20, 13);
	// Update and Draw
	_update();
	_draw();
}

function _update() {
	requestAnimationFrame(() => _update());

	testBall.update();
}

function _draw() {
	requestAnimationFrame(() => _draw());
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	testBall.draw();
}

class Ball extends GameObject {
	constructor(x, y, radius) {
		super(x, y);
        this.radius = radius;
		this.dx = 3;
		this.dy = 3;
		this.mass = 1;
		this.friction = 0.1;
		this.color = randomColor(colors);
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
        ctx.closePath();
	}

	update() {
		// Bounce
		if (this.position.y + this.radius > canvas.height || this.position.y < this.radius) {
			this.dy = -this.dy;
		}

		this.position.y += this.dy;
	}
}