Running = "Running_in_the_90s.mp3";
Gas = "Gas_Gas_Gas.mp3";
function preload(){

loadSound(Gas);
loadSound(Running);
}
function setup(){
canvas = createCanvas(800, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

console.log('Hello');

function draw(){
    image(video, 0, -400, 1000, 900);
}