const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

//declare variables
let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed =3;

//background

const background1=new Image();
background1.src = "images/sky.gif";

const background2 = new Image();
background2.src = "images/sky.gif";

const bg={
    x1:0,
    x2:canvas.width,
    y:0,
    width:canvas.width,
    height:canvas.height
}

function handleBg(){
    if(bg.x1<=-bg.width+gameSpeed) bg.x1=bg.width;
    else bg.x1-=gameSpeed;
    if(bg.x2<=-bg.width+gameSpeed) bg.x2=bg.width;
    else bg.x2-=gameSpeed;

    ctx.drawImage(background1,bg.x1, bg.y,bg.width,bg.height);
    ctx.drawImage(background2,bg.x2, bg.y,bg.width,bg.height);
}


//functions
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //ctx.fillRect(10,canvas.height-90,50,50);
    handleBg();
    handleObstacles();
    kirby.update();
    kirby.draw();
    ctx.fillStyle = "red";
    ctx.font="90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if(handleCollisions()) return;
    handleParticles();
    requestAnimationFrame(animate);
    angle+= 0.12;
    hue++;
    frame++;
}


animate();

//when we press space=true otherwise false
window.addEventListener("keydown", function(e){
    if(e.code === "Space") spacePressed=true;
})

window.addEventListener("keyup", function(e){
    if(e.code === "Space") spacePressed = false;
})

const crash = new Image();
crash.src = "images/gameover1.png";

function handleCollisions(){
    for(let i = 0; i <obstArray.length;i++){
        if(kirby.x<obstArray[i].x+obstArray[i].width&&
            kirby.x+kirby.width>obstArray[i].x&&
            ((kirby.y<0+obstArray[i].top&&
                kirby.y+kirby.height>0)||
                (kirby.y>canvas.height-obstArray[i].bottom&&
                    kirby.y+kirby.height<canvas.height)))
                    {
                        //collision detected
                        ctx.drawImage(crash,kirby.x,kirby.y,250,150);
                        ctx.font="25px Georgia";
                        ctx.fillStyle="white";
                        ctx.fillText("Your score was " + score, 160, canvas.height/2-10)
                        return true;
                    }
            }
    
}