var wall, thickness; 
var bullet, speed, weight; 

function setup(){
  createCanvas(1600, 400); 
  speed=random(55, 9); 
  wall=random(400, 1500); 
  thickness=random(20, 83); 
  bullet=createSprite(50, 50, 200, 50); 
  bullet.velocityX= speed; 
  bullet.shapeColour=colour(255); 
  wall=createSprite(1500, 200, 60, height/2); 
  wall.shapeColour=colour(80, 80, 80);  
}
function draw(){
  drawSprites()
}
function hasCollided(lbullet, lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x; 

return true(); 
}
return false(); 
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0; 
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness); 
  |
  if(damage>10)
  {
    wall.shapeColour=colour(255, 0, 0); 
  }
  if(damage<10){
    wall.shapeColour=colour(0, 255, 0); 
  }
}