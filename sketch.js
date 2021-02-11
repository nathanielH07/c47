const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var m1, m2, m3, m4;
var m5, m6, m7,m8;
var f1, f2, f3, f4;
var f5,f6,f7;
var spaceship, spaceshipIMG;
var score = 0;
var o1,o2,o3,o4;
var lwall,rwall,bwall,twall

function preload() {
  spaceshipIMG = loadImage("spaceship.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    spaceship = createSprite(50,400,30,30);
    spaceship.addImage(spaceshipIMG);
    spaceship.scale = 0.075;
    o1 = createSprite(325,20,20,20);
    o2 = createSprite(500,20,20,20);
    
    o3 = createSprite(850,300,20,20);
    o4 = createSprite(850,500,20,20);
  
lwall = createSprite(0,400,10,800);
rwall = createSprite(1200,400,10,800);
bwall = createSprite(600,800,1200,10);
twall = createSprite(600,0,1200,10);

bwall.debug = true;

m1 = createSprite(125,125,250,10);
m2 = createSprite (125,675,250,10)
m3 = createSprite(400,400,10,400);
m4 = createSprite(600,125,100,10);
m5 = createSprite(600,675,100,10);
m6 = createSprite(850,550,200,10,);
m7 = createSprite(850,250,200,10);
m8 = createSprite(850,400,200,100);
m9 = createSprite(1050,250,10,150);
m10 = createSprite(1050,550,10,150);
f1 = createSprite(200,200,10,10);
f2 = createSprite(200,600,10,10);
f3 = createSprite(500,300,10,10);
f4 = createSprite(500,500,10,10);
f5 = createSprite(850,625,10,10);
f6 = createSprite(850,175,10,10);
f7 = createSprite(1050,390,10,10);

}
function draw(){
background("black");
textSize = 10;
fill = "black";

text("score:" + score,600,20);
o3.bounceOff(m3);
o4.bounceOff(m3);
o3.bounceOff(m9);
o4.bounceOff(m10);
o1.bounceOff(bwall);
o2.bounceOff(bwall);
o1.bounceOff(twall);
o2.bounceOff(twall);
spaceship.collide(m1);
spaceship.collide(m2);
spaceship.collide(m3);
spaceship.collide(m4);
spaceship.collide(m5);
spaceship.collide(m6);
spaceship.collide(m7);
spaceship.collide(m8);
spaceship.collide(m9);
spaceship.collide(m10);
o1.velocityY = 5;
    o2.velocityY = -5;
    o3.velocityX = 5;
    o4.velocityX = -5;

if(keyDown("w")){
spaceship.y = spaceship.y-5;
}

if(keyDown("a")){
  spaceship.x = spaceship.x-5;
  }
  if(keyDown("s")){
    spaceship.y = spaceship.y+5;
    }
    
if(keyDown("d")){
  spaceship.x = spaceship.x+5;
  }
  
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
m10.display();
f1.display();
f2.display();
f3.display();
f4.display();
f5.display();
f6.display();
f7.display();
o1.display();
o2.display();
text(mouseX +"," +mouseY, mouseX,mouseY);
drawSprites();
if(spaceship.isTouching(f1)){
  
  score = score+2;
  f1.visible = false;
  }
  if(spaceship.isTouching(f2)){
   
    score = score+2; 
    f2.visible = false;
    }
    if(spaceship.isTouching(f3)){
     
      score = score+2;
    f3.visible = false;
     }
}