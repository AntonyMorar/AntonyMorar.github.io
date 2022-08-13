// Antony Adrian Morales Rosas
// Agosto 2022

function _init() {
	// Objects
	ballArray = getRandomBalls(100);
	// Update and Draw
	_update();
	_draw();
}

function _update() {
	requestAnimationFrame(() => _update());

	ballArray.forEach(ball => {
		ball.update();
	});
}

function _draw() {
	requestAnimationFrame(() => _draw());
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ballArray.forEach(ball => {
		ball.draw();
	});
}

class Ball extends GameObject {
	constructor(x, y, radius, dy) {
		super(x, y);
        this.radius = radius;
		this.dx = 2;
		this.dy = dy;
		this.mass = 1;
		this.friction = 0.95;
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
		if (this.position.y + this.radius > canvas.height) {
			this.dy = -this.dy * this.friction;
		}else{
            this.dy += Physics.gravity;
        }

		this.position.y += this.dy;
	}
}

function getRandomBalls(spawnNumber){
	this.ballArray = [];
	this.min = 0
	this.max = canvas.with

	for(var i=0; i<spawnNumber; i++){
		var x = Random.range(0, canvas.width)
		var y = Random.range(-40, 40)
		var dy = Random.range(1,4);
		ballArray.push(new Ball(x, y, 18,dy))
	}

	return this.ballArray;
}