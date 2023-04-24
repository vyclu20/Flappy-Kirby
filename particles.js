const particlesArray=[];

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
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x + this.size / 3, this.y - this.size / 3);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x + this.size / 3, this.y + this.size / 3);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.lineTo(this.x - this.size / 3, this.y + this.size / 3);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.lineTo(this.x - this.size / 3, this.y - this.size / 3);
        ctx.closePath();
        ctx.fill();
    }
}


function handleParticles(){
    particlesArray.unshift(new Particle);

    for(let i = 0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();

    }
    if(particlesArray.length>200){
        for(let i = 0; i <20; i++){
            particlesArray.pop(particlesArray[i]);
        }
    }
}
