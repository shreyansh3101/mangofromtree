
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var Tree,boy,boyi,stone;
var m1,m2,m3,m4,m5;
var c;

function preload()
{
boyi=loadImage("img/Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);
boy=createSprite(90,500,50,50)
boy.addImage(boyi)
boy.scale=0.09
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Tree=new tree(400,200,50,10)
stone=new Stone(25,430,10,10)
m1=new Mango(500,300,40,40)
m2=new Mango(600,250,40,40)
m3=new Mango(650,300,40,40)
m4=new Mango(700,350,40,40)
m5=new Mango(430,320,40,40)
c=new con(stone.body,{x:40,y:450})
Engine.run(engine);
}
	
  


function draw() {
	
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  Tree.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  drawSprites();
  stone.display()
  c.display()
 dectectCollision(stone,m1)
 dectectCollision(stone,m2)
 dectectCollision(stone,m3)
 dectectCollision(stone,m4)
 dectectCollision(stone,m5)
}

function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

c.fly()


}
function dectectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false)

}
}


