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
            if (this.obstacle.obstacles[i].y > this.ctx.canvas.height) {
                this.obstacle.obstacles.splice(i, 1);
                this.score++;
            }
        }
        this.drawScore();
    }

    drawScore(){
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.font = "normal 26px pixelFont";
        this.ctx.fillText(`Score: ${this.score} pts`, 20, 37);
        this.ctx.strokeStyle = "black";
        this.ctx.strokeText(`Score: ${this.score} pts`, 20, 37);
        this.ctx.restore();
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
            setTimeout(() => alert(`GAME OVER, you crashed!!! Your score is: ${this.score}. Try again!`), 5);
            this.stop();
            window.location.reload();
        }
    }
}