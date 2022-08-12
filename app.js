// Antony Adrian Morales Rosas
// Agosto 2022

function main(){
    //Constants
    gravity = -9.8;
    // Objects
    testBall = new Ball();
    // Update and Draw
    _update();
    _draw();
}


function _update() {
    requestAnimationFrame(() => _update());

    testBall.update();
}

function _draw(){
    requestAnimationFrame(() => _draw());
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    testBall.draw();
}

class Ball{
    constructor(){
        this.x = 95
        this.y = 20
        this.dx = 3
        this.dy = 3
        this.mass = 1
        this.friction = 0.1
        this.radius = 12
        this.color = randomColor(colors);
    }


    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color
        ctx.fill();
    }

    update(){
        // Bounce
        if(this.y + this.radius > canvas.height || this.y < this.radius){
            this.dy = -this.dy
        }
        
        this.y += this.dy;
    }
}
