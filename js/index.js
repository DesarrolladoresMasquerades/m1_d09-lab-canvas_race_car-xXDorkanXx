const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 282;
canvas.height = 441;

const player = new Player(ctx);
const obstacle = new Obstacle(ctx);

const game = new Game(ctx, player, obstacle);

// const car = {
//   img: new Image(),
//   x: 127,
//   y: 371,
//   width: 28,
//   height: 59,
//   vx: 5,
//   vy: 5
// } 
// car.img.src = "images/car.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};



document.addEventListener(
  "keydown",
  (event)=>{
    switch (event.key) {
      case "ArrowLeft":
        if(player.x <= 0){player.x = 0}
        else{player.x -= 5;}
        break;
      case "ArrowRight":
        if(player.x >= canvas.width - player.width){player.x = canvas.width - player.width}
        else{player.x += 5;}
        break;
    }
  }
)

document.addEventListener('keyup', () => {
  player.vx = 0;
  player.vy = 0;
});

