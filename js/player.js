class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 127;
        this.y = 371;
        this.width = 28;
        this.height = 59;
        this.img = new Image();
        this.img.src = "images/car.png";
    }

    init(){
        this.x = 127;
        this.y = 371;
        this.width = 28;
        this.height = 59;
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

    crashCollision(ele) {
        if (
          (this.y + 10 < ele.y + ele.height && this.x + 15 < ele.x + ele.width && this.x + this.width - 15 > ele.x) ||
          (ele.y + ele.height > this.y && ele.x < this.x + this.width && this.x < ele.x + ele.width)
        ) {
          setTimeout(() => alert('crash'), 5);
          window.location.reload();
        }
      }
    
}