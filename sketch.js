var fixedRect, movingRect;
var g1,g2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=0;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-5;
  g1 = createSprite(400,100,50,50);
  g1.shapeColor="green";
  //g1.velocityX=5;
  g2 = createSprite(200,100,50,50);
  g2.shapeColor="green";
  //g2.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  if(isTouching(movingRect,g1)){
    movingRect.shapeColor = "red";
    g1.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    g1.shapeColor = "green";
  }

  if(isTouching(movingRect,g2)){
    movingRect.shapeColor = "red";
    g2.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    g2.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

