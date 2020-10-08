function isTouching(sprite1, sprite2){
    if(sprite2.x-sprite1.x < sprite1.width/2 + sprite2.width/2 && sprite2.y-sprite1.y < sprite1.height/2+sprite2.height/2 && sprite1.x-sprite2.x < sprite1.width/2 + sprite2.width/2 && sprite1.y-sprite2.y < sprite1.height/2 + sprite2.height/2){
      return true;
    } else {
      return false;
    }
 }
 
 function bounceOff(sprite3, sprite4){
   if(sprite3.x-sprite4.x < sprite3.width/2 + sprite4.width/2 && sprite4.x-sprite3.x < sprite4.width/2 + sprite3.width/2 && sprite4.y-sprite3.y < sprite4.height/2+sprite3.height/2 && sprite3.y - sprite4.y < sprite3.height/2 + sprite4.height/2){
     sprite3.velocityX = sprite3.velocityX * -1;
     sprite3.velocityY  =sprite3.velocityY * -1;
   }
 }