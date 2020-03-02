var sun;
var star;
function setup() {
  createCanvas(400,400);
fill="orange";
 var sun = createSprite(200, 200, 100, 100);
  star.fill="blue";
 var star = createSprite(50, 50,40, 40);
}

function draw() {
  background(10,10,10); 
  star.velocityX=2;
  if (star.x=350){
    star.velocityX=0;
    star.velocityY=2;
  }
  if(star.y=350){
    star.velocityX=-2;
    star.velocityY=0
  }
  if(star.x=50){
    star.velocityX=0;
    star.velocityY=-2
  }
  if(star.y=50){
    star.velocityX=0;
    star.velocityY=-2;
  }




   drawSprites();
}