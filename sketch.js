var y = 0
function setup () {
  createCanvas(800, 600, WEBGL)
  background(0)
}

function draw () {
  y = y - 20
  if (y < 0) {
    y = height
  }
  rotate(frameCount * 0.01)
  rotateY(frameCount * 0.5)
  // rotateZ(frameCount * 0.3)
  ellipse(0, y, 20, 20)
  noStroke()
}
