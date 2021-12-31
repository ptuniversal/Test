const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ground;

var rock1,rock2,rock3,rock4,rock5,rock6;

var backgroundIMG;

function preload(){

  backgroundIMG=loadImage("Picture/Background.png");
  
}

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  ground= new Ground(400,390,800,20);

  rock1=new Rock(650,350,40,40);
  //rock2=new Rock(650,355,20,20);
  //rock3=new Rock(650,335,20,20);
  //rock4=new Rock(650,315,20,20);
  //rock5=new Rock(650,295,20,20);
  //rock6=new Rock(650,275,20,20);
  

  
}

function draw() {
  background(backgroundIMG);  

  Engine.update(engine);

  ground.display();

  rock1.display();
  //rock2.display();
  //rock3.display();
  //rock4.display();
  //rock5.display();
  //rock6.display();


}