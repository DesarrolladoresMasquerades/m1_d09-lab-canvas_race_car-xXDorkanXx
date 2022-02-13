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
        this.obstacle.createObstacles();
        this.play();
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

    stop(){
        cancelAnimationFrame(this.frames);
        this.frames = null;
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

        for (let i = 0; i < this.obstacle.obstacles.length; i++) {
            this.obstacle.obstacles[i].move();
            this.obstacle.obstacles[i].draw();
            this.crashCollision(this.obstacle.obstacles[i]);
            if (this.obstacle.obstacles[i].y > 800) {
                this.obstacle.obstacles.splice(i, 1);
            }
        }
        //this.drawScore();
    }

    crashCollision(ele) {
        const leftP = this.player.x;
        const rightP = this.player.x + this.player.width;
        const topP = this.player.y;
        const botP = this.player.y + this.player.height;

        const leftEle = ele.x;
        const rightEle = ele.x + ele.width;
        const topEle = ele.y;
        const botEle = ele.y + ele.height;

        if ((leftP < leftEle &&  rightP > leftEle && topP < botEle && botP > topEle) ||
            (rightP > rightEle &&  leftP < rightEle && topP < botEle && botP > topEle) ||
            (topP > topEle && topP < botEle && rightP > leftEle && leftP < leftEle) ||
            (topP > topEle && topP < botEle && leftP < rightEle && rightP > rightEle) ||
            (topP > topEle && topP < botEle && leftP > leftEle && rightP < rightEle)){
          setTimeout(() => alert('crash'), 5);
          this.stop();
          window.location.reload();
        }
    }
}