
img = "";
status = "";
function preload(){
img = loadImage('kitchen.jpg');

}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#e71a1d");
    text("window", 45, 75);
    noFill();
    stroke("#e71a1d");
    rect(30, 60, 450, 350);
    fill("#224df1");
    text("table", 320, 120);
    noFill();
    stroke("#224df1");
    rect(300, 90, 270, 320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(errore);
    }
    console.log(results);
}
