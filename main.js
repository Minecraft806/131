img = "";
status = "";

function setup() {
    canvas=createCanvas(640,420);
    canvas.center()
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("CocoSsd Model Has Been Loaded");
    status = true;
    object_detector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}

function draw() {
      image(img,0,0,640,420);
      fill("black");
      text("Bird Cage",150,230);
      noFill();
      stroke("blue")
      rect(100,200,200,200);

      fill("red");
      text("Birds", 400, 200);
      noFill();
      stroke("red")
      rect(350, 180, 150, 150);
}

function preload() {
    img=loadImage('Birdcage.jpg');
}