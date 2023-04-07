const character = new Image();
character.src = "images/kirby3.png";

class Kirby{
    constructor(){
        this.x=150;
        this.y=200;
        this.z=0;
        this.originWidth=735;
        this.originHeight=739;
        this.width= this.originWidth/20;
        this.height=this.originHeight/20;
        this.weight=1;
    }

    update(){
        let curve = Math.sin(angle)*20;
        if(this.y>canvas.height-(this.height*3)+curve){
            this.y=canvas.height-(this.height*3)+curve;
            this.z=0;
        }else{
            this.z+=this.weight;
            this.z*=0.9;
            this.y+=this.z;
        }
        if (this.y<0+this.height){
            this.y=0+this.height;
            this.z=0;
        }
        if(spacePressed && this.y>this.height) this.flap();
    }

    draw(){
        ctx.fillStyle="red";
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(character, 0,0,this.originWidth, this.originHeight,this.x,
            this.y, this.width,this.height);
    }

    flap(){
        this.z-=2;
    }

}
const kirby = new Kirby();