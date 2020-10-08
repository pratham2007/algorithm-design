var sprite1, sprite2;
var sprite3, sprite4;
var edges;

function setup() {
  createCanvas(800,400);

  edges = createEdgeSprites();

  sprite1 = createSprite(300, 200, 50, 50);
  sprite1.shapeColor = "green";
  sprite2 = createSprite(400, 200, 70, 30);
  sprite2.shapeColor = "green";

  sprite3 = createSprite(200, 200, 40, 40);
  sprite3.velocityX = 2;
  sprite3.velocityY = 2;
  sprite3.shapeColor = "red";

  sprite4 = createSprite(600, 200, 70, 40);
  sprite4.shapeColor = "green";

}

function draw() {
  background(255,255,255); 

  sprite3.bounceOff(edges);


  sprite2.x = mouseX;
  sprite2.y = mouseY;
  
   if(isTouching(sprite1, sprite2)){ 
     sprite2.shapeColor = "red";
     sprite1.shapeColor = "red";
   } else {
     sprite1.shapeColor = "green";
     sprite2.shapeColor = "green";
   }

   bounceOff(sprite3, sprite4);

  drawSprites();
}

