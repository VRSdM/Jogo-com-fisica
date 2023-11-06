
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
   

	engine = Engine.create();
	world = engine.world;

	
    var plane_options = {
    isStatic: true
	}
	
	var block_options = {
		isStatic: true
	};

	var rotator_options = {
		isStatic: true
	};

  var particle_options = {
    restitution:0.4,
    friction:0.02
  }

	plane = Bodies.rectangle(100,300,100,20,plane_options);
	World.add(world,plane);

    block1 = Bodies.rectangle(100,300,100,20,block_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(100,300,100,20,block_options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

  particle1 = Bodies.rectangle(210,10,10,particle_options);
	World.add(world,particle1);
  particle2 = Bodies.rectangle(200,10,10,particle_options);
	World.add(world,particle2);
  particle3 = Bodies.rectangle(190,10,10,particle_options);
	World.add(world,particle3);
  particle4 = Bodies.rectangle(180,10,10,particle_options);
	World.add(world,particle4);
  particle5 = Bodies.rectangle(220,10,10,particle_options);
	World.add(world,particle5);

	Engine.run(engine);
   
	fill();
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(rotator1,angulo1);
  push();
  translate(rotator1.position.x,rotator1.position.y,);
  rotate(angulo1);
  rect(0,0,150,20);
  pop();
  angulo1 +=0.2;

  Matter.Body.rotate(rotator2,angulo2);
  push();
  translate(rotator2.position.x,rotator2.position.y,);
  rotate(angulo2);
  rect(0,0,150,20);
  pop();
  angulo2 +=0.3;

  Matter.Body.rotate(rotator3,angulo3);
  push();
  translate(rotator3.position.x,rotator3.position.y,);
  rotate(angulo3);
  rect(0,0,150,20);
  pop();
  angulo3 +=0.4;

 
rect(rotator1.position.x,rotator1.position.y,650,20);
rect(rotator2.position.x,rotator2.position.y,650,20);
rect(rotator3.position.x,rotator3.position.y,650,20);

  drawSprites();
 
}



