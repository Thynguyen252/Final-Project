let corgi, oggy, sign;
let x;
let y;
let xspeed;
let yspeed;


function preload() {
  corgi = loadImage('assets/corgi.png');
  oggy = loadImage('assets/oggy.png');
  sign = loadImage('assets/sign.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 60;
  yspeed = 60;


}

function draw() {
  background(255);
  image(corgi, x, y);
  image(oggy, mouseX-50, mouseY-50);

  x = x + xspeed;
  y = y + yspeed;

  if (x + corgi.width >= width) {
    xspeed = -xspeed;
    x = width - corgi.width;
  } else if (x <= 0){
    xspeed = -xspeed;
    x = 0;
  }

   if (y + corgi.height >= height) {
    yspeed = -yspeed;
    y = height - corgi.height;
  } else if (y <= 0){
    yspeed = -yspeed;
    y = 0;
  }
  const center = createVector(x,y);
  const mouse = createVector(mouseX, mouseY);

  const vector = center.copy().sub(mouse);
    const overlap = vector.mag() - (corgi.width/2 + oggy.width/2);

    // console.log(overlap);


    if (overlap < 0) {
      button = createImg('assets/sign.png');
      button.position(0,200);
      button.mousePressed(gameOver);
      startNewGame();
      // let shift = vector.copy().normalize().setMag(overlap);
            } else {
            fill('white');
    }

}

function gameOver(){
  let a = createA('gameover.html', 'GAME OVER');
  a.position(50, 50);
}

function startNewGame(){
  window.location.href("https://google.com");
}
