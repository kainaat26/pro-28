
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var ground,tree;
function preload()
{
	treeIMG = loadImage("tree.png");
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

 ground = new Ground(500,650,1000,20);
	stone1 = new Stone(30,580,10);

	mango1 = new Mango(700,250,10);
	mango2 = new Mango(600,260,10);
	mango3 = new Mango(500,300,10);
	mango4 = new Mango(600,350,10);
	mango5 = new Mango(800,300,10);
	mango6 = new Mango(700,150,10);
	mango7 = new Mango(770,200,10);
	mango8 = new Mango(600,150,10);
	mango9 = new Mango(900,300,10);
	mango10 = new Mango(850,230,10);
	mango11 = new Mango(760,100,10);
	//Engine.run(engine);
	launcher = new SlingShot(stone1.body,{x:45,y:580});
}


function draw() {
  rectMode(CENTER);
  background("white");
 Engine.run(engine);
 ground.display();
 
image(treeIMG,700,360,500,600);
image(boyIMG,100,610,200,120);
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
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly()
}

//function detectCollision(stone1,mango)



