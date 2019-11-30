let bg;
let undo;
let item;
var lineInfo = [];


function preload(){
  if(windowWidth>windowHeight){
    console.log("pc");
    document.body.style.backgroundImage = "url('fieldvertical.jpg')";
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  stroke(0);
  background('rgba(0,0,0,0)');
  button = createButton('Clear');
  button.position(1, windowHeight/2 - (button.width * 0.1));
  button.mousePressed(cleanCanvas);


}

function cleanCanvas(){
  canvas.clear();
}

function touchMoved() {
  stroke(0);
  undo = [mouseX, mouseY, pmouseX, pmouseY];
  //console.log(undo);
  lineInfo.push(undo);
  lineDrawing = line(undo[0], undo[1], undo[2], undo[3]);
  return false;
}