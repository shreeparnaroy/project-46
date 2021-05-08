var john
var key=0
var keyig
var bg1
var gameState=0
var button, counter =0
function preload(){
john_walk=loadAnimation("images/b1.png","images/b2.png")
john_stand=loadAnimation("images/b1.png")
john_jump=loadAnimation("images/b3.png")
john_slide=loadAnimation("images/b4.png")
john_hurt=loadAnimation("images/b5.png")
keyig=loadImage("images/key.png")
bg1=loadImage("bg1.png")
}






function setup() {
  createCanvas(displayWidth,displayHeight);
  john = createSprite(500,450)
  john.addAnimation("image",john_stand)
  john.scale=2.5

  zombie = createSprite(200,200,100,100)
  //zombie.addImage()

  button=createButton("next")
  button.position(600,600)
}

function draw() {
  textSize(50);
  fill("red");
  strokeWeight(7);
  stroke("white");
  console.log(gameState)
  if(gameState===0){
    background("orange")
    console.log(counter)
    button.mouseClicked(function(){
      counter +=1
      console.log(counter)
      switch(counter){
        case 1 :text("ZOMBIE : Do you realize where you are?",100,100)
        break;

        case 2 :text("JOHN: oh my god have you kidnapped me? ",800,300)
        break;
        case 3 :text("ZOMBIE: noo you are stuck in the zombie world",100,100)
                break;
        case 4 : text("ZOMBIE: if you want to escape run for your life",100,100)
                break;

        case 5 :
        gameState =1
        break;

        default : console.log("error!!!!")
      }
    })
  }
//instruction fro jhon
    if(gameState ===1){
    background("black")
    text("help john escape the zombie world \nby fighting the emimies and running for his life \n he is trapper here,\n help him escape using the below instruction",300,100)
    text("to jump press space key \n help him collect all the keys \n he can fight the monsters by pressing k",400,600)
    button.mouseClicked(()=>{
        gameState =2
      })
    }

    if(gameState === 2){
      //runner game
    }


  drawSprites();
}

function spawnKeys() {
    if (frameCount % 60 === 0) {
      var key = createSprite(600,120,40,10);
      key.y = Math.round(random(80,120));
      key.addImage(keyig);
      key.scale=0.5
      key.velocityX = -3;
      key.lifetime = 200;   
  }
}

//spawn monster function -like obsticals

//




