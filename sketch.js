
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bwall, lwall, rwall, ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,30)
	ground = new Ground(width/2,670,width,20);
	bwall = new Dustbin(500,650,110,10)
	lwall = new Sidewall(550,630,10,50)
	rwall = new Sidewall(450,630,10,50)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  bwall.display();
  lwall.display();
  rwall.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:30,y:-30})
	}
}



