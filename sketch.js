var trex, trex_running, edges;
var groundImage;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,174,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground = createSprite(300,200,600,12);
  ground.addImage("ground", groundImage);
  ground.x= ground.width/2;
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("lightblue");
  
  //logging the y position of the trex
  //console.log(trex.y)
  ground.velocityX = -8;
  if (ground.x<0){
    ground.x = ground.width/2;
  }

  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -8;
  }
  
  trex.velocityY = trex.velocityY + 0.7;
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}