const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var piso, pisoImg;
var torre, torreImg;


function preload() {

  pisoImg=loadImage("./Imagenes/background.gif");

  torreImg=loadImage("./Imagenes/tower.png");
 }

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var piso_op={
    isStatic:true
  }

  piso=Bodies.rectangle(0, height-1, width*2, 1, piso_op);
  World.add(world, piso);

  torre=Bodies.rectangle(95,200,160,310,piso_op);
  World.add(world,torre);
  
}

function draw() {
  background(189);
  image(pisoImg,0,0,1200,600);
  Engine.update(engine);
  rect(piso.position.x, piso.position.y, width*2, 1);
  push();
  rectMode(CENTER);
  image(torreImg, torre.position.x, torre.position.y, 160,310);
   pop();
}
