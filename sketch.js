var PLAY=1;
var END=0;
var gameState=1;

var bg,backgroundimage;

 var gift3,gift3G,gift3_image;

 //var gameover,gameOver_img;
var player1, player1_img;

//var opponents;
//var opponent1,opponent1_img;
//var opponent2,opponent2_img;
//var opponent3,opponent3_img;

var giftCollection=0;


function preload(){
  backgroundimage=loadImage("snowmountain1.jpg")
  player1_img=loadImage("player4.jpg")
 //opponent1_img =loadImage("opponent1.png")
 //opponent2_img =loadImage("opponent2.jpg")
  gift3_image=loadImage("gift31.jpg")
 // gameOver_img =loadImage("gameOver.jpg")

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  //player1=createSprite(100,600,20,20)
  //player1.addImage( player1_img)
 // player1.scale=0.15

  
  gift3G=new Group ();
}


function draw() {
  background(backgroundimage); 

if (gameState===PLAY){ 
 player1.x = World.mouseX;

edges= createEdgeSprites();
 player1.collide(edges);

  createSantaP();
//spawnopponents ();

  textSize(40);
  stroke ("white")
  fill("red");
 text("Total Points: "+ giftCollection,800,200);

  if(gift3G.isTouching(player1)) {
  gift3G.destroyEach();
    giftCollection= giftCollection +200;
  }
}

//else if (gameState===END){ 
   //if(opponent1.isTouching(player1)) {
   // gameState=END;
  //  gift3G.destroyEach();
  //  gift3G.setVelocityXEach(0);
  //  gameover=("gameending",gameOver_img);
  //        gameover.x=200;
   //       gameover.y=300;
    //      gameover.scale=0.5;
  //}
 // else if (opponent2.isTouching(player1)){
   // gameState=END;
  //  gift3G.destroyEach();
  //  gift3G.setVelocityXEach(0);
  //  gameover=("gameending",gameOver_img);
     //     gameover.x=200;
     //     gameover.y=300;
      //    gameover.scale=0.5;
 // } else if(opponent3.isTouching(player1)) {
   // gameState=END;
  //  gift3G.destroyEach();
  //  gift3G.setVelocityXEach(0);
  //  gameover=("gameending",gameOver_img);
     //     gameover.x=200;
     //     gameover.y=300;
     //     gameover.scale=0.5;
 // }
//}


  drawSprites();
}


  function createSantaP () {
    if (World.frameCount % 500=== 0) {
    var gift3 = createSprite(Math.round(random(200, 550),40, 10, 10));
    gift3.addImage(gift3_image);
    gift3.scale=0.2;
    gift3.velocityX = 3;
    gift3.lifetime = 150;
    gift3G.add(gift3);
    }
     }
  

 // function spawnopponents(){
 //   if(frameCount%100===0){
 //   opponents=createSprite(100,600,20,20);
 //   opponents.velocityX=+3;
 //     var rand=Math.round(random(1,3))
 //     switch(rand){
 //       case 1:opponents.addImage(opponent1_img)
 //       break;
 //       case 2:opponents.addImage(opponent2_img)
 //         break;
 //         default:break
 //     } 
       //   opponents.scale=0.20
       //   opponents.lifetime=450
 // }
//}