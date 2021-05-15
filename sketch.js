var forest, forestImg;
var cat, catImg

function preload() {
forestImg = loadImage("catlunchbackground.jpg")
catImg = loadImage("cat2.jpg") 
}

function setup() {
  createCanvas(620,300)
  forest = createSprite(85,85,800,600)
  forest.addImage("forest", forestImg)
  forest.scale = 3;
  forest.x = forest.width/2;
  cat = createSprite(50,20,100,100)
  cat.addImage("cat", catImg)


}

function draw() {



background(209)
forest.velocityX = -3;
 if(forest.x < 0){
  forest.x = forest.width/2;
  
  }

drawSprites();  



}



