const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 20;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "img/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "img/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "img/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "img/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "img/layer-5.png";

class Layer{
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;

  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;

    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
//1:08:43

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  requestAnimationFrame(animate);
}
animate();
