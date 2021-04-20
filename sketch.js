
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(600, 600);
  background(208, 215, 245);
  
  stroke(100, 82, 86);
}

function draw() {
  background(208, 215, 245, 5);
  strokeWeight(strokeWidth);
  
  noiseOffset += 0.10;
  strokeWidth = noise(noiseOffset) * 10;
  
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } 
}

function keyTyped(){
  console.log('key ${key} is being typed')
 
  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'x'){
    clear();
  }
}