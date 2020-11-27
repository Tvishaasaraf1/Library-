function setup() {
  createCanvas(800,400);
  square = createSprite(400, 200, 50, 50);
  rectangle = createSprite(200,200,80,50);
  circle = createSprite(200,200,90,50);
  triangle = createSprite(600,200,40,60);
  triangle.velocityX = -10
  edges = createEdgeSprites()
}

function draw() {
  background("pink");  
  rectangle.x = mouseX
  rectangle.y = mouseY
  if(isTouching(circle,triangle)){
    circle.visible = false
    triangle.visible = false 

  }
  else{
    circle.visible = true
    triangle.visible = true 
  }
   triangle.bounceOff(edges)
   
  if(isTouching(square,rectangle)){
    square.shapeColor = "blue"
    rectangle.shapeColor = "blue"
  }
  else{
    square.shapeColor = "turquoise"
    rectangle.shapeColor = "turquoise" 
  }
  drawSprites();
}

