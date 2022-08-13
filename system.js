class GameObject {
	constructor(x, y) {
		this.position = {
			x: x,
			y: y,
		};

		this.rotation = {
			x: 0,
			y: 0,
		};
	}
}

class Vector2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static down() {
		return new Vector2(0, -1);
	}

	static left() {
		return new Vector2(-1, 0);
	}

	static one() {
		return new Vector2(1, 1);
	}

	static right() {
		return new Vector2(1, 0);
	}

	static up() {
		return new Vector2(0, 1);
	}

	static zero() {
		return new Vector2(0, 0);
	}

	static magnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

class Physics {
	constructor() {}

	static gravity = 0.5;
}

class Random {
	static range(min, max) {
		return Math.random() * (max - min + 1) + min;
	}

	static rangeInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// Utility functions
	static randomColor(colors) {
		return colors[Math.floor(Math.random() * colors.length)];
	}
}
