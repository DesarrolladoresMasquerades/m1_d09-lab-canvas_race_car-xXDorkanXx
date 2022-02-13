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
    
}