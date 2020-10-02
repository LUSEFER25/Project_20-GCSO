var car, wall;
var weight, speed;
function setup() 
{
  createCanvas(1600,400);

  speed = random(50,90);
  weight = random(400,1500)

  wall = createSprite(1550,200,60,200);
  wall.shapeColor = "white";

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

}
  
function draw() 
{
  background(0); 
    car.velocityX = speed;
  
  
  if(passengerSafety())
    {
      text("The Test is working and the Cars are touching", 150, 200);
    } 
    else
    {
      text("The Cars are not touching", 200, 200);
    }

    //console.log(wall.x);


  drawSprites();
}





function passengerSafety()
{
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    console.log(deformation);
    

    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0)
    }
    
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(255,210,0);
    }

    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
  }

  if(car.isTouching(wall))
  {
    car.velocityX = 0;
  }


}





