const obstArray=[]

const topPipeImage = new Image();
topPipeImage.src = "images/toppipe.png";

const bottomPipeImage = new Image();
bottomPipeImage.src = "images/bottompipe.png";

class obst {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 40;
    this.bottom = (Math.random() * canvas.height) / 3 + 40;
    this.x = canvas.width;
    this.width = 55;
    this.color = "hsl(" + hue + ",100%,50%)";
    this.counter = false;
  }

  draw() {
    ctx.drawImage(topPipeImage, this.x, 0, this.width, this.top);
    ctx.drawImage(
      bottomPipeImage,
      this.x,
      canvas.height - this.bottom,
      this.width,
      this.bottom
    );
  }

  update() {
    this.x -= gameSpeed;
    if (!this.counter && this.x < kirby.x) {
      score++;
      this.counter = true;
    }
    this.draw();
  }
}


function handleObstacles(){
  //to change space between each set of pipes
    if(frame % 100===0){
        obstArray.unshift(new obst);
    }
    for(let i=0;i<obstArray.length;i++){
        obstArray[i].update();
    }
    if(obstArray.length>20){
        obstArray.pop(obstArray[0]);
    }
}