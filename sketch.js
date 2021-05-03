
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function preload()
{
treeimg = loadImage("tree.png");
boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,650,1000,20);
	stone1 = new Stone(100,550,10);
	

	mango1 = new Mango(940,250,10);
	mango2 = new Mango(840,260,10);
	mango3 = new Mango(740,300,10);
	mango4 = new Mango(840,350,10);
	mango5 = new Mango(540,300,10);
	mango6 = new Mango(740,150,10);
	mango7 = new Mango(640,200,10);
	mango8 = new Mango(840,150,10);
	mango9 = new Mango(640,280,10);
	mango10 = new Mango(810,100,10);
	mango11 = new Mango(740,230,10);

	Engine.run(engine);
	launcher = new SlingShot(stone1.body,{x:100,y:540});
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ground.display();

  image(treeimg,750,350,500,600);
  image(boyimg,180,590,260,200);
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  launcher.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  detectCollision(stone1,mango11);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
launcher.fly()
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.radius+stone.radius);
	{
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if (keyCode === 32){
	Matter.Body.setPosition(stone1.body , {x:100,y:540})
	launcher.attach(stone1.body);
}
}