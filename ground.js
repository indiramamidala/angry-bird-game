class Ground extends BaseClass{
    constructor(x,y){
        var options = {
            'stifness':1.5,
            'density':0.5,
            'friction':1.0
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.Ground.LoadImage("sprites/ground.png");
world.add(world.this.body);

    }
    display(){
this.pos = this.body.position;
this.height = this.body.height;
this.angle = this.body.angle;

    }
}