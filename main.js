l_w=0;
r_w=0;
t_r=0;
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
            l_w=results[0].pose.leftWrist.x;
            r_w=results[0].pose.rightWrist.x;
            t_r=floor(l_w-r_w);
        }
    }
    function draw(){
        background("#808080");
        document.getElementById("square_side").innerHTML="The Font Size will be ="+t_r+"px";
        textSize(t_r);
        text('Atharva', 200, 275);
    }