function setup(){
    canvas=createCanvas(550,550);
    canvas.position(750,150);
    video=createCapture(VIDEO);
    video.size(550,750);
    video.position(150,50);
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet=poseNet.on('pose',gotPoses);
}
function modalLoaded(){
    console.log("Poos naat is Inisoolized ");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background("#808080");
}