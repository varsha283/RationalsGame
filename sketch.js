var canvas
var b1
var b2
var b3
var b4
var b5
var b6
var b7
var b8
var b1img,b2img,b3img,b4img,b5img,b6img,b7img,b8img
var playerscore=0;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var finger;
var finger1,finger2;
var fingerimg
function preload(){
  b1img = loadImage("../b1.png");
  b2img = loadImage("../b2.png");
  b3img = loadImage("../b3.png");
  b4img = loadImage("../b4.png");
  b5img = loadImage("../b5.png");
  b6img = loadImage("../b6.png");
  b7img = loadImage("../b7.png");
  b8img = loadImage("../b8.png");
  fingerimg = loadImage("../unnamed.png")

}
function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  b1=createSprite(100,-100,20,20);
  b1.addImage(b1img)
  b2=createSprite(300,-250,20,20);
  b2.addImage(b2img)
  b4=createSprite(500,-350,20,20);
  b4.addImage(b4img)
  b5=createSprite(700,-300,20,20);
  b5.addImage(b5img)
  b7=createSprite(900,-400,20,20);
  b7.addImage(b7img)
  b8=createSprite(1100,-70,20,20);
  b8.addImage(b8img)
  b6=createSprite(1300,-170,20,20);
  b6.addImage(b6img)
  b3=createSprite(800,-200,20,20);
  b3.addImage(b3img)
  finger=createSprite(700,750,500,500);
  finger.addImage(fingerimg)
  finger1=createSprite(200,750,500,500);
  finger1.addImage(fingerimg)
  finger2=createSprite(1200,750,500,500);
  finger2.addImage(fingerimg)
}

function draw() {
  background("white");
  fill("blue");
   
  textSize(18);  
  text("Score:"+playerscore,1300,50)
  text("Pop The bubbles which have a Rational Number In them",500,300)
  text("Don't let the fingers below pop the rational numbers",510,330)
  if(gamestate===PLAY){
    
    b1.velocityY=2
    b2.velocityY=3
    b3.velocityY=4
    b4.velocityY=5
    b5.velocityY=6
    b6.velocityY=7
    b7.velocityY=8
    b8.velocityY=9
    if(mousePressedOver(b1)){
      b1.lifetime=0
    playerscore=playerscore+1
    }
     if(mousePressedOver(b2)){
      b2.destroy();
    playerscore=playerscore-1
    }
     if(mousePressedOver(b3)){
      b3.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b4)){
      b4.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b5)){
      b5.destroy();
    playerscore=playerscore-1
    }
    if(mousePressedOver(b6)){
      b6.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b7)){
      b7.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b8)){
      b8.destroy();
    playerscore=playerscore-1
    }
    
     if(b1.isTouching(finger1)){
      playerscore=playerscore-1
      b1.destroy();
     } 
     if(b2.isTouching(finger1)){
      
      b2.destroy();
     } 
     if(b3.isTouching(finger)){
      playerscore=playerscore-1
      b3.destroy();
     }
      if(b4.isTouching(finger)){
        playerscore=playerscore-1
      b4.destroy();
     } 
     if(b5.isTouching(finger)){
      
      b5.destroy();
     } 
     if(b6.isTouching(finger2)){
      playerscore=playerscore-1
      b6.destroy();
     } 
     if(b7.isTouching(finger)){
      playerscore=playerscore-1
      b7.destroy();
     }
     if(b8.isTouching(finger2)){
      
      b8.destroy();
     }
  }
  
  drawSprites();
}