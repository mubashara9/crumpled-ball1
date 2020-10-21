class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1.5
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,option);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("green");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}