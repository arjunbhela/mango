
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var rockk
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8
var sling
function preload()
{
}

function setup() {
	createCanvas(1028, 528);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	ground = new Ground(500,540,1500,50)
	rockk = new Rock(190,200,100,100)
	sling = new Slingshot(rockk.body,{x:190,y:200})
	boy = new Boy(200,400,300,400)
	mango1 = new Mango(830,150,50,50)
	mango2 = new Mango(800,120,30,30)
	mango3 = new Mango(750,200,65,65)

	mango4 = new Mango(880,150,35,35)
	mango5 = new Mango(920,180,65,65)
	mango6 = new Mango(840,70,50,50)

	mango7 = new Mango(700,160,40,40)
	mango8 = new Mango(980,200,50,50)

	tree = new Tree(500,300,450,450)
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  sling.display();
  boy.display()
  tree.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  rockk.display()
  drawSprites();
  ground.display();
 
}

function keyPressed() {
	if(keyCode===32) {
		Matter.Body.setPosition(rockk.body,{x:190,y:200})
		sling.attach(rockk.body)
	}
}

function mouseDragged() {
	Matter.Body.setPosition(rockk.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	  sling.fly();
	}

function detectCollision(rockk,mango1){
mangoBodyPos = mango1.body.position
rockBodyPos = rockk.body.position

var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos,x,mangoBodyPos.y)
if (distance<-mango1.r+rockk.r) {
	Matter.Body.setStatic(mango1.body,false);
}
}
//
function detectCollision(rockk,mango2){
	mangoBodyPos = mango2.body.position
	rockBodyPos = rockk.body.position
	
	var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos,x,mangoBodyPos.y)
	if (distance<-mango2.r+rockk.r) {
		Matter.Body.setStatic(mango2.body,false);
	}
	}
//
	function detectCollision(rockk,mango3){
		mangoBodyPos = mango3.body.position
		rockBodyPos = rockk.body.position
		
		var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos,x,mangoBodyPos.y)
		if (distance<-mango3.r+rockk.r) {
			Matter.Body.setStatic(mango3.body,false);
		}
		}

		//
		function detectCollision(rockk,mango4){
			mangoBodyPos = mango4.body.position
			rockBodyPos = rockk.body.position
			
			var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos,x,mangoBodyPos.y)
			if (distance<-mango4.r+rockk.r) {
				Matter.Body.setStatic(mango4.body,false);
			}
			}
			//
			function detectCollision(rockk,mango5){
				mangoBodyPos = mango5.body.position
				rockBodyPos = rockk.body.position
				
				var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos,x,mangoBodyPos.y)
				if (distance<-mango5.r+rockk.r) {
					Matter.Body.setStatic(mango5.body,false);
				}
				}
				
			
		
	