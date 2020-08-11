
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 85;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	roof1 = new Roof(400,300,500,40)
	bobObject1 = new Bob(555,550,40)
	bobObject2 = new Bob(475,550,40)
	bobObject3 = new Bob(395,550,40)
	bobObject4 = new Bob(315,550,40)
	bobObject5 = new Bob(235,550,40)
	rope1 = new rope(bobObject1.body,roof1.body,bobDiameter*2, 0)
	rope2 = new rope(bobObject2.body,roof1.body,+bobDiameter*1, 0)
	rope3 = new rope(bobObject3.body,roof1.body,0, 0)
	rope4 = new rope(bobObject4.body,roof1.body,-bobDiameter*1, 0)
	rope5 = new rope(bobObject5.body,roof1.body,-bobDiameter*2, 0)



}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-400,y:-355})
	}
}



