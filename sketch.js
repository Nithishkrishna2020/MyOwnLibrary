var fixedRect,movingRect
var object;
function setup() {
  createCanvas(1200,800);//create Gaming Area
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
  object = createSprite(100,100,50,50);


  
}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(isTouching(object,movingRect)){
     movingRect.shapeColor = "red";
     object.shapeColor = "red";

  }
  else{
   movingRect.shapeColor = "green";
   object.shapeColor = "green";

  }
  
  

  drawSprites();
}
