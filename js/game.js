class Game{
    constructor(ctx, player, obstacle){
        this.ctx = ctx;
        this.player = player;
        this.obstacle = obstacle;

        this.frames = 0;
        this.score = 0;
        
        this.background = new Image();
        this.background.src = "images/road.png";
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    start(){
        this.init();
        this.play();
        this.obstale.createObstacles();
    }

    init(){
        if(this.frames) this.stop();
        this.frames = 0;
        this.score = 0;
        this.x = 0;
        this.y = 0;
        this.player.init();
        this.obstacle.init();
    }

    play(){
        this.move();
        this.draw();
        if(this.frames !== null){
            this.frames = requestAnimationFrame(this.play.bind(this));
        }
        /*
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();

            this.car.move();
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].move();
                this.obstacles[i].draw();
                this.car.crashCollision(this.obstacles[i]);
                if (this.obstacles[i].y > 800) {
                    this.obstacles.splice(i, 1);
                }
            }
        }, 1000 / 60);
        */
    }

    draw(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.drawImage(
            this.background,
            this.x,
            this.y,
            this.width,
            this.height
        );
        this.player.draw();
        this.obstacle.draw();
        this.drawScore();
    }
}