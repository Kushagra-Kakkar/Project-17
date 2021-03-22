var background,backgroundImage;

var bow,bowImage;

var redBalloon,redBalloonImage;

var blueBalloon,blueBalloonImage;

var pinkBalloon,pinkBalloonImage;

var greenBalloon,greenBalloonImage;

var arrow, arrowImage;

function preload(){
 //load your images here 
 backgroundImage=loadImage('background0.png')
 bowImage=loadImage('bow0.png')
 redBalloonImage=loadImage('red_balloon0.png')
 blueBalloonImage=loadImage('blue_balloon0.png')
 pinkBalloonImage=loadImage('pink_balloon0.png')
 greenBalloonImage=loadImage('green_balloon0.png')
 arrowImage=loadImage('arrow0.png') 
}


function setup() {
  createCanvas(600, 600);
  
  //add code here
 background=createSprite(300,300,600,600)
 background.addImage(backgroundImage)
 background.scale=1.99 
 background.velocityX=4;
  
 bow = createSprite(490, 300)
 bow.addImage(bowImage)
  
 for (i = 99; i < 400; i = i + 60.2) { 
 redBalloon=createSprite(50,i)
 redBalloon.addImage(redBalloonImage)
 redBalloon.scale=0.1
  
  
  }
  
  for (i = 120; i < 400; i = i + 64) { 
 blueBalloon=createSprite(100,i)
 blueBalloon.addImage(blueBalloonImage)
 blueBalloon.scale=0.1
  
  
  }
  
 for (i = 175; i < 400; i = i + 80) { 
 greenBalloon=createSprite(150,i)
 greenBalloon.addImage(greenBalloonImage)
 greenBalloon.scale=0.1
  
  
  }
  
 for (i = 200; i < 400; i = i + 108) { 
 pinkBalloon=createSprite(200,i)
 pinkBalloon.addImage(pinkBalloonImage)
 pinkBalloon.scale=1.3
  
  
  }
  
 
 
}


function draw() {

  //add code here
 if (background.x>400) {
 background.x= background.width/2
 } 
  
 bow.y = mouseY;
  
 if(keyDown('space')){
 arrow=createArrow();
 arrow.addImage(arrowImage)
 arrow.y=bow.y; 
} 
  
  drawSprites();
}


function createArrow(){
  arrow=createSprite(490,300);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  return arrow;
}

