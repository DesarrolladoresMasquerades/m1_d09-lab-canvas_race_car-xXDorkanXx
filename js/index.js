const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var background = new Image();
background.src = "images/road.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(background,0,0);
  }
};

