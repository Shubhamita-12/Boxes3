class Ground {
    constructor() {
        var ground1 = {
            isStatic : true
        }
        this.body = Bodies.rectangle(200,380,400,20,ground1);
        World.add(world,this.body);
    }
   display() {
       var posi = this.body.position;
       rectMode(CENTER);
       rect(posi.x,posi.y,400,20);
   }
}