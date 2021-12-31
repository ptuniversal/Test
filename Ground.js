class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        

    this.ground= Bodies.rectangle(x,y,this.width, this.height,options);
    this.width=width;
    this.height=height;
    World.add(world, this.ground);

    }

    display(){

        push ();
        
        rectMode(CENTER);
        
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);

        pop ();


    }
}
