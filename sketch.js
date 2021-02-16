const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var object2_options ={
        restitution: 1,
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    object2 = Bodies.circle(210,120,20,object2_options);
    World.add(world,object2);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS)
ellipse(object2.position.x,object2.position.y,20,20);
}