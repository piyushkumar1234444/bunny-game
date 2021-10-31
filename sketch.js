//Creating Variables:-
var bunny;
var score=0;
var edges;
var target;
var snakeGroup;
//Adding images on Character:-
function preload() {
 bunnyImage=loadImage("images/carrat.jfif")
//  obsImage=loadImage("images/images(2).jfif")
//  snakeImage=loadImage("images/download.jfif")
//  targetImage=loadImage("images/images(1).jfif")
 
}

//creating Characters
function setup() {
  createCanvas(600,600);
  ellipse(100,350,40,30);


  bunny=createSprite(40,550,30,30)
bunny.addImage(bunnyImage)
  snakeGroup= new Group();
  edges=createEdgeSprites()
edges.addImage(obsImage)
target=createSprite(550,40,30,30)
target.addImages(targetImages)
  obs1 = createSprite(300,120,70,20)
  obs1.velocityX=5
  obs7= createSprite(40,320,70,20)
  obs7.velocityX=-5
  obs8 = createSprite(170,120,70,20)
  obs8.velocityX=5
  obs9 = createSprite(430,120,70,20)
  obs9.velocityX=-5
  obs10 = createSprite(560,120,70,20)
  obs10.velocityX=5
  obs2 = createSprite(40,120,70,20)
  obs2.velocityX=-5
  obs3 = createSprite(170,320,70,20)
  obs3.velocityX=5
  obs4 = createSprite(300,320,70,20)
  obs4.velocityX=-5
  obs5 = createSprite(430,320,70,20)
  obs5.velocityX=5
  obs6 = createSprite(560,320,70,20)
  obs6.velocityX=-5
  obs11 = createSprite(590,320,20,1000)
  obs12 = createSprite(10,320,20,1000)
  obs13 = createSprite(150,10,1000,20)
  obs14 = createSprite(110,590,1000,20)
  
}

function draw() {
  background("green");  
  obs1.bounceOff(edges[0])
  obs1.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  obs2.bounceOff(edges[1])
  obs3.bounceOff(edges[0])
  obs3.bounceOff(edges[1])
  obs4.bounceOff(edges[1])
  obs4.bounceOff(edges[0])
  obs5.bounceOff(edges[1])
  obs5.bounceOff(edges[0])
  obs6.bounceOff(edges[1])
  obs7.bounceOff(edges[0])
  obs7.bounceOff(edges[1])
  obs8.bounceOff(edges[0])
  obs8.bounceOff(edges[1])
  obs9.bounceOff(edges[0])
  obs9.bounceOff(edges[1])
  obs10.bounceOff(edges[0])
  obs10.bounceOff(edges[1])
  //Keys for Moving Bunny
  if(keyDown("up")){
    bunny.y=bunny.y-3
  }
  if(keyDown("down")){
     bunny.y=bunny.y+3
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3
  }
  if(bunny.isTouching(target))
  {
    text("You Win",300,300)
    bunny.velocity=0
  }
  if (player.isTouching(obs1))
 {
   obs1.velocityX=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs2))
 {
   obs2.velocityX=0
   obs1.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs3))
 {
   obs3.velocity=0
   obs1.velocityX=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs3))
 {
   obs3.velocity=0
   obs1.velocityX=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs4))
 {
  obs4.velocity=0
   obs1.velocityX=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs5))
 {
  obs5.velocity=0
   obs1.velocityX=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs6))
 {
   obs1.velocityX=0
   obs6.velocity=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs7))
 {
   obs1.velocityX=0
   obs6.velocity=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs8))
 {
   obs1.velocityX=0
   obs6.velocity=0
   obs2.velocityX=0
   text("You loose",300,300)
 }
 if (bunny.isTouching(obs9))
 {
  text("You loose",300,300)
  bunny.velocity=0
 }
 if (bunny.isTouching(obs10))
 {
  text("You loose",300,300)
 bunny.velocity=0
 }
 if (player.isTouching(obs11))
 {
  text("You loose",300,300)
 bunny.velocity=0
 }
 if (player.isTouching(obs12))
 {
  text("You loose",300,300)
 bunny.velocity=0
 }
 if (player.isTouching(obs13))
 {
  text("You loose",300,300)
 bunny.velocity=0
 }
 if (player.isTouching(obs14))
 {
  text("You loose",300,300)
 bunny.velocity=0
 }
 generateSnakes()
 for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites()
  
}
function generateSnakes(){
  if(frameCount % 30===0){
    console.log(frameCount);
    var snake = createSprite(random(40,380),random(290,380),40,5);
    snake.addImage(snakeImage)
    snake.scale=0.2
    snake.shapeColor="green"
    snake.velocityX=random(-4,4);
    snake.velocityY=random(-4,4);
    snakeGroup.add(snake);
    }
  }