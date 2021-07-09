var as ;
var bg  , sleep , brush  , bath , drink,eat , gym , move;  



function preload (){
bg = loadImage ("img/iss.png");
sleep=loadAnimation("img/sleep.png");
brush=loadAnimation("img/brush.png");
bath=loadAnimation("img/bath1.png" , "img/bath2.png", "img/bath1.png" , "img/bath2.png");
drink=loadAnimation("img/drink1.png","img/drink2.png", "img/drink1.png","img/drink2.png");
eat=loadAnimation("img/eat1.png", "img/eat2.png","img/eat1.png", "img/eat2.png")
gym=loadAnimation("img/gym1.png","img/gym2.png","img/gym11.png", "img/gym12.png");
move=loadAnimation("img/move.png", "img/move1.png");


}
function setup() {
  createCanvas(800,400);
  
   as=createSprite(300,230);
   as.addAnimation("sleeping", sleep);
   as.scale=0.1;
}

function draw() {
  background(bg); 
 if(keyDown("UP_ARROW")){
as.addAnimation("brushing",brush)
as.changeAnimation("brushing");
as.y=250;
as.velocityX=0;
as.velocityY=0;
 }
if(keyDown("DOWN_ARROW")){
  as.addAnimation("bathing",bath)
  as.changeAnimation("bathing");
  as.y=250;
  as.velocityX=0;
  as.velocityY=0;
   }
if(keyDown("RIGHT_ARROW")){
    as.addAnimation("drinking",drink)
    as.changeAnimation("drinking");
    as.y=250;
    as.velocityX=0;
    as.velocityY=0;
}
if(keyDown("LEFT_ARROW")){
  as.addAnimation("eating",eat)
  as.changeAnimation("eating");
  as.y=250;
  as.velocityX=0;
  as.velocityY=0;
}
if(keyDown("g")){
  as.addAnimation("gyming",gym)
  as.changeAnimation("gyming");
  as.y=250;
  as.velocityX=0;
  as.velocityY=0;
}
if(keyDown("s")){
as.addAnimation("moving",move)
as.changeAnimation("moving")
as.y=250
as.velocityX=0;
as.velocityY=0;






}

  drawSprites();
}