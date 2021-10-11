// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(000000);
//   fill('#CF46FF')
//   circle(windowWidth/2, windowHeight/2, 50);
  




// }

let player = document.querySelector("lottie-player");
let play = document.querySelector("#start");
let stop = document.querySelector("#stop");

play.onclick = function () {
    player.play();
};

stop.onclick = function () {
    player.pause();
};

