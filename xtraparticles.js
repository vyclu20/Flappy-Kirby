//for circle particles. for the draw method in particles.js if you want for the particles to be circle shaped instead of star shaped

class Particle{
    constructor(){
        this.x=kirby.x;
        this.y=kirby.y;
        this.size=Math.random()*7+3;
        this.speedY=(Math.random()*1)-0.5;
        this.color="hsl("+hue+",100%,50%,0.8)";
    }
    update(){
        this.x-=gameSpeed;
        this.y+=this.speedY;
    }

    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }

}