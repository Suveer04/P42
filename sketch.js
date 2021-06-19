var iss, spacecraft;
var hasDocked = false;
var bg,issImg,scImg1,scImg2;

function preload(){
  issImg = loadImage('Docking-unDocking/iss.png');
  bg = loadImage('Docking-unDocking/spacebg.jpg');
  scImg1 = loadImage('Docking-unDocking/spacecraft1.png');
  scImg2 = loadImage('Docking-unDocking/spacecraft2.png');
  scImg3 = loadImage('Docking-unDocking/spacecraft3.png');
  scImg4 = loadImage('Docking-unDocking/spacecraft4.png');
}

function setup() {
  createCanvas(800,400);
 spacecraft =  createSprite(370, 280, 50, 50);
 spacecraft.addImage(scImg1);
 spacecraft.scale = 0.2;


 iss = createSprite(330,130,40,40);
 iss.addImage(issImg);
 iss.scale = 1;


}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x - 5;
      spacecraft.addImage(scImg3);
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x + 5;
      spacecraft.addImage(scImg4);
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scImg1);
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 5;
    }
  }

  if(spacecraft.y <= iss.y + 70 && spacecraft.x <= iss.x - 20){
    hasDocked = true;
    spacecraft.addImage(scImg2);
    textSize(31);
    fill(255);
    text('Docking Successful!',350,350);
  }
  drawSprites();
}