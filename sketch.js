var backImg;
var santa, santaImg;
var gift, gifts;
var Divyansh, DivyanshImg1, DivyanshImg2 ;
var Aryansh, AryanshImg1, AryanshImg2 ;
var edges;
var canvas;
var g1, g2, g3, g4, g5;

function preload(){
  backImg = loadImage("BG1.jpg");    
  santaImg = loadImage("santa.png");
  g1 = loadImage("g1.png");
  g2 = loadImage("g2.png");
  g3 = loadImage("g3.png");
  g4 = loadImage("g4.png");
  g5 = loadImage("g5.png");

  AryanshImg1 = loadImage("Ary1.png");
  AryanshImg2 = loadImage("Ary2.png");

  DivyanshImg1 = loadImage("Div1.png");
  DivyanshImg2 = loadImage("Div2.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  santa = createSprite(200,180,40,20);
  santa.addImage("santa", santaImg);
  santa.velocityX = 5;
  santa.scale = 0.6;

  
  Divyansh = createSprite(10, height - 100, 10, 10);
  Divyansh.addImage("Divyansh", DivyanshImg1);
  Divyansh.scale = 0.8;


 
  Aryansh = createSprite(width - 100, height - 100, 10, 10 );
  Aryansh.addImage("Aryansh", AryanshImg1);
  Aryansh.scale = 0.8;


 edges = createEdgeSprites();

 gifts = createGroup();
}

function draw() {
  
  background(180);
 
  image(backImg, 0, 0, width, height);

  santa.bounceOff(edges);
 
  if (keyDown("LEFT_ARROW")) 
    {
     Aryansh.x = Aryansh.x - 3;
    }

    if (keyDown("RIGHT_ARROW")) 
    {
     Aryansh.x = Aryansh.x + 3;
    }

    if (keyDown("a")) 
    {
     Divyansh.x = Divyansh.x - 3;
    }

    if (keyDown("d")) 
    {
     Divyansh.x = Divyansh.x + 3;
    }


      giftDrop();

  drawSprites();
}

function giftDrop(){
  if (frameCount % 150 === 0){
    gift = createSprite(400,165,10,40);
    gift.velocityY = 9;
    gift.x = santa.x;
    
     //generate random gift
     var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: gift.addImage(g1);
               break;
       case 2: gift.addImage(g2);
               break;
       case 3: gift.addImage(g3);
               break;
       case 4: gift.addImage(g4);
               break;
       case 5: gift.addImage(g5);
               break;
      default: break;
       
     }
    
     //assign scale and lifetime to the gift           
     gift.scale = 0.5;
     gift.lifetime = 300;
    
    //add each gift to the group
     gifts.add(gift);
  }
 }

