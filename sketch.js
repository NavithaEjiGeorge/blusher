function preload(){
redI = loadImage("i1.png");
greenI = loadImage("i2.png")
violetI = loadImage("i6.png");
goldI = loadImage("i3.png");
black = loadImage("i4.png")
orange = loadImage("i5.png")
brown = loadImage("i7.png")
goI = loadImage("go.png");

}

function setup() {
  createCanvas(600,600)
  face = createSprite(350,300, 20, 20);
  face.addAnimation("1",redI);
  face.addAnimation("2", greenI)
  face.addAnimation("3",goldI)
  face.addAnimation("4",black)
  face.addAnimation("5",orange)
  face.addAnimation("6",violetI)
  face.addAnimation("7",brown)
  face.scale =0.8;
    go = createSprite(500,300,20,20);
  go.addImage(goI);
  go.scale =0.5;
  go.scale = 0.3;
  red = createSprite(100, 140, 20, 20);
  red.shapeColor = "red"
  pink = createSprite(100, 200, 20, 20);
  pink.shapeColor = "brown"
  green = createSprite(100, 255, 20, 20);
  green.shapeColor = "green";
  blue = createSprite(100, 310, 20, 20);
  blue.shapeColor = "orange";
  black = createSprite(50, 365, 20, 20);
  black.shapeColor = "black";
  violet = createSprite(150, 365, 20, 20);
  violet.shapeColor = "violet"
  gold = createSprite(100, 365, 20, 20);
  gold.shapeColor = "gold"
}

function draw() {
  background("pink");
 drawSprites();
    if (mousePressedOver(red)) {
    face.changeAnimation("1",redI)
  }
  if (mousePressedOver(green)) {
    face.changeAnimation("2",greenI)
  } 
   if (mousePressedOver(pink)) {
    face.changeAnimation("7",brown)
  } 
     if (mousePressedOver(blue)) {
    face.changeAnimation("5",orange)
  }
  
       if (mousePressedOver(violet)) {
    face.changeAnimation("6",violetI)
  }
  
       if (mousePressedOver(black)) {
    face.changeAnimation("4",black)
  }
         if (mousePressedOver(gold)) {
    face.changeAnimation("3",goldI)
  }
    fill("red")
    textSize(15)
    text("When you click the go button",250,80);
    text("you will receive a click here message",250,100);
    text("After getting the message click on it to play further..",195,120)
    text("CLICK THE COLOURED BLOCKS TO GET THE DESIRED NAIL POLISH",2,30)
      if(mousePressedOver(go)){
    link = createA(" https://navithaejigeorge.github.io/necklace/","CLICK HERE");
    link.position(400,400);
  }
}