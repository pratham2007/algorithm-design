var sprite1, sprite2;

function setup() {
  createCanvas(800,400);

  sprite1 = createSprite(300, 200, 50, 50);
  sprite1.shapeColor = "green";
  sprite2 = createSprite(400, 200, 70, 30);
  sprite2.shapeColor = "green";
}

function draw() {
  background(255,255,255); 

  sprite2.x = mouseX;
  sprite2.y = mouseY;
  
   if(sprite2.x-sprite1.x < sprite1.width/2 + sprite2.width/2 && sprite2.y-sprite1.y < sprite1.height/2+sprite2.height/2 && sprite1.x-sprite2.x < sprite1.width/2 + sprite2.width/2 && sprite1.y-sprite2.y < sprite1.height/2 + sprite2.height/2){
     sprite1.shapeColor = "red";
     sprite2.shapeColor = "red";
   } else {
     sprite1.shapeColor = "green";
     sprite2.shapeColor = "green";
   }


  drawSprites();
}