var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor="green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green";

  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green";

  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green";

  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  
  if(isTouching(movingRect,gameobject2))
  {
    movingRect.shapeColor="red";
    gameobject2.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    gameobject2.shapeColor="green";
  }
  drawSprites();
}