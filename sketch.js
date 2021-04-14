
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music,music1,music2,music3;

function preload(){
music = loadSound("music.mp3");
  music1 = loadSound("YouTube Piano - Play It With Your Computer Keyboard.mp3");
music2 = loadSound("music.mp3");
music3 = loadSound("music.mp3");

  
}


function setup(){
    canvas = createCanvas(925,600);

    block1 = createSprite(20,580,380,30);
    block1.shapeColor = "blue";

    block2 = createSprite(335,580,220,30);
    block2.shapeColor = "orange";
   
    block3 = createSprite(590,580,220,30);
    block3.shapeColor = "red";
    
    block4 = createSprite(915,580,380,30);
    block4.shapeColor = "yellow";



    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=2.5;
  ball.velocityX=0.75;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
music1.loop();
        //write code to stop music
    }
  if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        

    }
  if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0

        
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4
frameRate(240);
    drawSprites();
}

  
  
