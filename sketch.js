var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Puntuación: "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 400 ", 80, 550);
  text(" 300 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 300 ", 560, 550);
  text(" 400 ", 640, 550);
  text(" 500 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
 
  if(ball!=null) {
    ball.display();

    if(ball.body.position.y > 750 && gameState === "start") {

      if(ball.body.position.x > 0 && ball.body.position < 80) {
        score = score +500;
        ball = null;
        
      }

      else if(ball.body.position.x > 81 && ball.body.position.x < 160) {
        score = score +400;
        ball = null;
        
      }

      else if(ball.body.position.x > 161 && ball.body.position.x < 240) {
        score = score +300;
        ball = null;
        
      }

      else if(ball.body.position.x > 241 && ball.body.position.x < 320) {
        score = score +200;
        ball = null;
        
      }

      else if(ball.body.position.x > 321 && ball.body.position.x < 480) {
        score = score +100;
        ball = null;
        
      }

      else if(ball.body.position.x > 481 && ball.body.position.x < 560) {
        score = score +200;
        ball = null;
        
      }

      else if(ball.body.position.x > 561 && ball.body.position.x < 640) {
        score = score +300;
        ball = null;
        
      }

      else if(ball.body.position.x > 641 && ball.body.position.x < 720) {
        score = score +400;
        ball = null;
        
      }

      else if(ball.body.position.x > 721 && ball.body.position.x < 800) {
        score = score +500;
        ball = null;
        
      }

    }

  }

  if (gameState === "end") {
    textSize(50);
    text("Game Over", 275, 335);
    ball = null;
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}


function mousePressed() {
  if (gameState !== "end") {
    ball = new Ball(mouseX, 10, 10, 10); 
    count ++; 
    if (count >= 10) {
      gameState = "end";
    }
  }
}