var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)

  weight=random(400,1500)

  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);

  bullet.velocityX = speed;

 bullet .shapeColor=color(225);


  wall=createSprite(1500, 200, thickness, height/2)

  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight *  speed * speed/22509;
    console.log (deformation)
    if(deformation>180)
  {
    bullet.shapeColor=color(255,0,0);
  }
    if(deformation<180 && deformation>100)
  {
    bullet.shapeColor=color(230,230,0);
  }
    if(deformation<100)
  {
      bullet.shapeColor=color(0,255,0);
    }
  }  
drawSprites();
}

function hascollided(lbullet,lwall)


{

      bulletRightEdge=lbullet.x +lbullet.width;
      wallLeftEdge=lwall.x;

          if(bulletRightEdge>= wallLeftEdge)

  {

        return true;


  }
  else{

return false;



  }
      




}
