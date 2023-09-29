

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let hourX = 100;

function draw() {
  background(40,23,53);
  let s = second();
  let m = minute();
  let h = hour();
  let sc = map(s,0,60,200,width-200);
  let mn = map(m,0,60,200,width-200);
  let hr = map(h,0,24,200,width-200);

  //timeline
  fill(255);
  noStroke();
  rect(200,height/2,width-400,3);

  // hour ball
  stroke(255);
  strokeWeight(5);
  fill(255,186,231);
  ellipse(hr, height/2 , 250, 250);
   // minute ball
   fill(154,249,229);
  ellipse(mn, height/2 , 170, 170);
   // second ball
   fill(249,225,154);
  ellipse(sc, height/2 , 90, 90);

  

}
