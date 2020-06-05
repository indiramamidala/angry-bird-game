const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var log1,log2,log3,log4;
var player,enemy1,enemy2,box1,box2,box3,box4;
var engine,world;
var box1,box2,box3,box4;
var ground,platform,backgroundImg;

var gameState = "onSling";

function preload(){
getbackgroundImg();

}


function setup() {
  Engine = Engine.create();
  world = engine.world;
   canvas = createCanvas(1200,800);
   log1  = new Log();
   log2 = new Log();
   log3 = new Log();
   log4 = new Log();
   player = new Player();
  enemy1 = new Enemy();
  enemy2 = new Enemy();
  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();

}

function draw() {
  Engine.update(engine);
  log1.display();
  log2.display();
  log3.display();
  log4.display();

  player.display();
  enemy1.display();
  enemy2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  drawSprites();
  
  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getbackgroundImg(){
  var response = await fetch();
  var responseJSON = await response.json("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13);

  if(hour>=60&&hour<=19){
    bg = "sprites/background2.jpg";

  }
else{
  bg = "sprites/background.jpg";
}

backgroundImg.LoadImage(background);
console.log(backgroundImg);
}
}