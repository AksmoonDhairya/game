var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);

  
  speed=random(55,90)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 5);
 bullet.velocityX = speed;
 bullet.shapeColor=color(255)

 wall=createSprite(1200, 200,thickness,height/2);
 wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0);
 
  

  drawSprites();


 
}
function hasCollided(lbullet,lwall) {
  BulletRightEdge=lBullet.x=lBullet.width;
  WallLeftEdge=lWall.x;
  if(BulletRightEdge>=WallLeftEdge){
    return true;

  }
    return false;
}
if(hasCollided(Bullet,Wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness* thickness* thickness);

if (damage>10)
{
Wall.shapeColor=colour(255,0,0);

}

if (damage>10)
{
Wall.shapeColor=colour(255,0,0);

}

}