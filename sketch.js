
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	left = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	right = new Dustbin(670,620,20,100);

	paper = new Paper(100,300,10)
	ground = Bodies.rectangle(width/2,700,width,10,
		{
			isStatic: true
		});
		World.add(world,ground);
  
}


function draw() {
background("black");
  rectMode(CENTER);
background(0)
 
  
  drawSprites();
  
  left.display();
  right.display();
  bottom.display();
paper.display();
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x: 11,
		y: -12
		});
	}
}



