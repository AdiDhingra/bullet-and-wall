var bullet
var wall
var ran
var thickness
function setup() {
  createCanvas(1200,1200);
  thickness=Math.round(random(35,80))
  bullet=createSprite(200, 300, 35, 5);
  wall=createSprite(1000,300,thickness,100)
  ran=Math.round(random(27,30))

  bullet.shapeColor="white"
}

function draw() {
  background(0); 
  bullet.velocityX=ran 
  if(bullet.velocityX<28&&bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2
    && bullet.y-wall.y<bullet.height/2+wall.height/2
    && wall.y-bullet.y<bullet.height/2+wall.height/2)
  {
    wall.shapeColor="green"
    bullet.velocityX=0;
  }
  if(bullet.velocityX<29&&bullet.velocityX>27&&bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2
    && bullet.y-wall.y<bullet.height/2+wall.height/2
    && wall.y-bullet.y<bullet.height/2+wall.height/2)
  {
    wall.shapeColor="yellow"
    bullet.velocityX=0;
  }
  if(bullet.velocityX<30&&bullet.velocityX>28&&bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2
    && bullet.y-wall.y<bullet.height/2+wall.height/2
    && wall.y-bullet.y<bullet.height/2+wall.height/2)
  {
    wall.shapeColor="orange"
    bullet.velocityX=0;
  }
  if(bullet.velocityX<31&&bullet.velocityX>29&&bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2
    && bullet.y-wall.y<bullet.height/2+wall.height/2
    && wall.y-bullet.y<bullet.height/2+wall.height/2)
  {
    wall.shapeColor="red"
    bullet.velocityX=0;
  }
  
  drawSprites();
}