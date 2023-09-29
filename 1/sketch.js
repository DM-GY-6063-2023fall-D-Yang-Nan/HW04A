let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  

}

// rect

// function mouseClicked(){
//   let r = map(mouseX,0,width,0,255);
//   let b = map(mouseX,0,width,255,0);
//   fill(r,0,b);
//   rect(0,0,mouseX,mouseY);
// }

function mousePressed(){
  startTime = millis(); 
}

function mouseReleased(){
  let time = millis() - startTime;
  let dia = map(time,0,1000,0,500);
  let r = map(mouseX,0,width,0,255);
  let b = map(mouseX,0,width,255,0);
  fill(r,0,b);
  noStroke();
  ellipse(mouseX, mouseY, dia, dia);
}

function keyPressed(){
  background(255);
}