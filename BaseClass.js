class BaseClass{
constructor(x,y,width,height,angle){
   var options = {
'restitution':1.0,
'density':1.0,
'friction':0.5,
    }
    this.body = Bodies.rectangle(x,y.width,height,options);
    this.height = height;
    this.width = width;
    World.add(world,this.body);
    this.image = LoadImage("sprites/base.png");
}
display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}
