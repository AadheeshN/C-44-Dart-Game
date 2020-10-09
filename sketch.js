const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var dartObject, launcherObject, targetObject, backgroundImage, timerObject;

function setup() {
  var canvas = createCanvas(1200,620);
  engine = Engine.create();
  world = engine.world;

  dartObject = new Dart(200, 400, 100, 100);

  launcherObject = new Launcher(dartObject.body, {x: 200, y: 400});
  
}

function draw() {
  background(100, 100, 100);  
  Engine.update(engine);

  dartObject.display();
  launcherObject.display();

}

function mouseDragged() {
  Matter.Body.setPosition(dartObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  launcherObject.fly();
}