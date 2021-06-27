function setup() {
    canvas=createCanvas(640,420);
    canvas.center()
}

function draw() {
      image(img,0,0,640,420);
      fill("black");
      text("Bird Cage",150,230);
      noFill();
      stroke("blue")
      rect(100,200,200,200);
}

function preload() {
    img=loadImage('Birdcage.jpg');
}