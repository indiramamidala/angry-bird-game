class Slingshot extends BaseClass{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.5,
            length:20,
        }
        this.sling.LoadImage = ("sprites/slingshot.jpg.png");
        world.add(world.this.sling);
    }
fly(){
this.sling.pointA = null;
}
display(){
    image(this.sling,200,40);
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();

    if(this.body.sling){
        var pointA = this.sling.pointA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    if(pointA.x<280){
        strokeWeight(5);
        line(pointA.x - 10,pointA.y,pointB.x - 5,pointB.y);
        line(pointA.x - 10,pointA.y,pointB.x + 15,pointB.y - 1);
    }
else{
    strokeWeight(9);
        line(pointA.x + 15,pointA.y,pointB.x - 5,pointB.y);
        line(pointA.x + 15,pointA.y,pointB.x + 15,pointB.y - 10);
        pop();
}
}
}
}
