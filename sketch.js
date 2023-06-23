const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var bala;
var towerImage;
var balls=[]
function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImage = loadImage("assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
angle=20
cannon=new Cannon(180,110,130,100,angle)

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  for(var i=0;balls.length;i++){
showBalls(balls[i,i])
  }
cannon.display()

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    bala=new Bala(cannon.x,cannon.y)
    Matter.Body.setAngle(bala.body,cannon.angle)
    balls.push(bala)
  }
}
function showBalls(bala,i){
  if(bala){bala.display()}
}

function keyReleased(){
  if(keyCode==32){balls[balls.length-1].shoot()}
}