class Obstacle{
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * (this.ctx.canvas.width - 91) + 30);
        this.y = 5;
        this.width = 31;
        this.height = 59;
        this.img = new Image();
        this.img.src = "/images/red-car.png"
        this.obstacles = [];
    }

    init(){
        this.obstacles = [];
    }

    createObstacles() {
        if (Math.floor(Math.random() * 25) % 2 === 0) {
            this.obstacles.push(new Obstacle(this.ctx));
        }

        setTimeout(() => {
            this.createObstacles();
        }, 2000);
    }
    
    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 5;
        }
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}