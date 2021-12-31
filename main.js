noseX=0
noseY=0
function preload(){
optimus=loadImage('https://i.postimg.cc/g00LSGm6/Screenshot-141-removebg-preview-1.png')
}

function setup(){
canvas=createCanvas(400,400)
canvas.position(900,100)

video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modalLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
image(video,0,0,400,400)
image(optimus,noseX,noseY,180,280)
}

function capturemg(){
save("mg.png")
}

function modalLoaded(){
    console.log("MODAL IS LOADED")
}

function gotPoses(results){
if (results.length>0)
{
    console.log(results)
    noseX=results[0].pose.nose.x-20;
    noseY=results[0].pose.nose.y-100;
}
}