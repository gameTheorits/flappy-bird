const PLAY = 1;
const END = 2;
gamestate = 1;
var points = 0;
var bird;
var pipes = [];
var highscore = points
function setup() {
  createCanvas(1240, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  if(gamestate === 1){

  background(0);
  fill(255)
  textSize(20);
  text(points,10,30);
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      gamestate = 2;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  }
  if(gamestate ===2){
    background("red");
  }
  //text(highscore,50,20)
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    points += 1;
    //console.log("SPACE");
  }
}