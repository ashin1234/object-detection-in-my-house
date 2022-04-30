
img = "";
function preload(){
img = loadImage('desk.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#e71a1d");
    text("Laptop", 45, 75);
    noFill();
    stroke("#e71a1d");
    rect(30, 60, 450, 350);
}
