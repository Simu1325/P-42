var iss,bg;
var spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4 

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite(200,200,50,50);
  iss = loadImage("iss.png");
  iss.scale=0.5;
  spaceCraft1 = createSprite(300,200,30,30);
  spaceCraft1 = loadImage("spaceCraft1,png");
  spaceCraft1.scale = 0.5;
}

function preload(){
  iss = loadImage("img/iss.png");
  bg = loadImage("img/spacebg.jpg");
  spaceCraft1 = loadImage("img/spaceCraft1.png");
  spaceCraft2 = loadImage("img/spaceCraft2.png");
  spaceCraft3 = loadImage("img/spaceCraft3.png");
  spaceCraft4 = loadImage("img/spaceCraft4.png");
}

function draw() {
  background("spacebg.jpg"); 
  if(!hasDocked){
    spaceCraft1.x = 25
  } 
  drawSprites();
}