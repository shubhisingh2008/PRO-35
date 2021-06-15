//Create variables here
var dog , happydog , database , foodS , foodStock;
var dogimage , dogimage1;
function preload(){
dogimage = loadImage("images/dogImg.png")
dogimage1 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog  = createSprite(250,300,150,150);
  dog.addImage(dogimage);
  dog.scale = 0.15;

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87);
if (keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogimage1)

}
  drawSprites();
  //add styles here

  textSize(13)
  fill("white")
  stroke("black")
  text("NOTE: PRESS UP_ARROW KEY TO FEED DRAGO MILK",100,20)

  text("REMAINING FOOD:"+foodS,170,100)
  
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
if(x<=0){
x = 0;
}else{
  x = x-1;
}
database.ref('/').update({
  food:x
})
}


