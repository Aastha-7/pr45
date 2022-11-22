var bgImg,basketImg,appleImg,bananaImg,melonImg,pineappleImg,orangeImg;
var bg,fruitsGroup,basket;
var score=0;
function preload(){
  bgImg=loadImage("images/bg.jpg");
  basketImg=loadImage("images/basket.png");
  appleImg=loadImage("images/apple2.png");
  bananaImg=loadImage("images/banana2.png");
  melonImg=loadImage("images/melon2.png");
  orangeImg=loadImage("images/orange2.png");
  pineappleImg=loadImage("images/pineapple2.png");
}





function setup() {
  createCanvas(1000,900);
  bg=createSprite(400, 200, 1000, 400);
  bg.addImage(bgImg);
  bg.scale=1.3;
  basket=createSprite(100,350,100,100);
  basket.addImage(basketImg);
  basket.scale=0.3;

  fruitsGroup=new Group();
}



function draw() {
  background(255,255,255);  
  if(keyDown("RIGHT_ARROW")){
  basket.x=basket.x+5;
  }
  if(keyDown("LEFT_ARROW")){
    basket.x=basket.x-5;
  }
  spawnFruits();
  basket.overlap(fruitsGroup,function(collector,collected){
    collected.remove();
    score=score+20;
  })

  drawSprites();
  textSize(20);
  fill ("white");
  text("Score:"+score,700,20);
}
function spawnFruits(){
  if (frameCount%60===0){
    x=random(10,750);
    fruit=createSprite(x,-10,20,20);
    fruit.velocityY=10;
  var rand=Math.round(random(1,5));
  if(rand===1){
    fruit.addImage(appleImg);
  }
  else if(rand===2){
    fruit.addImage(bananaImg);
  }
  else if(rand===3){
    fruit.addImage(melonImg);
  }
  else if(rand===4){
    fruit.addImage(orangeImg);
  }
  else {
    fruit.addImage(pineappleImg);
  }
  fruitsGroup.add(fruit);
  if (fruit.y>300){
    fruitsGroup.destroyEach();
  }
  
    
  
  }
  }
