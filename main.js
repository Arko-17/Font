noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
function preload(){

}
function setup() {

    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 100);
    Posenet=ml5.poseNet(video, modelLoaded);
    Posenet.on("pose", gotPoses);
}
function draw() {
    background("#d0ff00");
    fill("#e3fb24");
    text("Arkoneil", noseX, noseY);
    textSize(32);
    document.getElementById("difference").innerHTML="The size of the text will be" + difference + "px";
}
function modelLoaded() {
    console.log("The model has been intiliased. Thank you for your patience :)")
}
function gotPoses(results) {
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(rightwristX-leftwristX);
        console.log("leftwristx="+leftwristX + ", rightwristx="+rightwristX + ", difference="+difference);
        textSize(difference);
    }
}