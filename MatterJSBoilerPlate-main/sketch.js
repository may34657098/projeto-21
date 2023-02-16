
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var radius = 40
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options = {
	
	restitution:0.3,
	friction:0,
	density: 1.2
   }
groundo = new ground(width/2,670,width,20)
leftSide = new ground(1100,600,20,120)
rightSide = new ground(900,600,20,120)
   ball = Bodies.circle(500,600,radius/2,ball_options)
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 ellipse(ball.position.x,ball.position.y,radius,radius)
 groundo.display()

 leftSide.display()
 rightSide.display()
}

function KeyPressed(){
if(keyCode === UP_ARROW) {
	Matter.Body.applyForce (ball,ball.position,{x:50,y:-50})
}

}


