
img = "";
status_desk = "";
object = [];
function preload() {
    img = loadImage('desk.jpg');

}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status_desk != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#dc1a1f");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#dc1a1f");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}
function modelLoaded() {
    console.log("Model Loaded!");
    status_desk = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(errore);
    }
    console.log(results);
    object = results;
}
