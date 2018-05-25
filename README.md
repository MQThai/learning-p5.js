# learning-p5.js

## What Is p5.js
p5.js is a JavaScript library to help make graphic and interactive experiences easy and simple.

## Getting Started
* In a folder, make an ```index.html``` and a ```sketch.js``` file
* You have two ways to link the p5.js library to ```index.html```:
   1. Download the p5.js library and link it in your folder
   2. Link to a p5.js file hosted online
* If you chose to link to a p5.js file hosted online like I did for this, add

   ```<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>```

   to the head of ```index.html```.  And also link ```sketch.js``` to ```index.html```
* ```index.html``` should look like this
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>
  <script src="sketch.js"></script>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## Make A Circle
Let's see if everything is linked up correctly.  We'll have a circle appear.  In ```sketch.js```, add the following:

```
function setup () {

}

function draw () {
  ellipse(50, 50, 80, 80)
}
```

The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution. 

The draw() function means "draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels".

Open ```index.html``` in your browser and if you see a circle, you're doing great.

<img src="images/circle.png" alt="circle in browser" width="250" height="250">

## Make A Canvas
Let's try making a canvas and draw circles wherever the mouse goes on the canvas.  Change the code in ```sketch.js``` to this:

```
function setup () {
  createCanvas(640, 480)
}

function draw () {
  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 80, 80)
}
```

In the setup() function, createCanvas() will make a window that is 640 pixels wide and 480 pixels high.

In the draw() function, circles will be drawn at the position of the cursor with a width and height of 80 pixels.  If the cursor is pressed and held while moving inside the canvas, a black circle will be drawn.  Otherwise, a white circle will be drawn.

You'll see something like this

<img src="images/canvas.png" alt="canvas with circles" width="250" height="250">

## Make A Star Mandala
We'll try another thing.  We'll draw a star mandala.  In ```sketch.js```, change the code to:

```
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
  ellipse(0, y, 20, 20)
  noStroke()
}
```

What we are doing now is drawing a line of circles starting at the borders of the canvas until the line reaches the center.  While the line is being drawn, we change the x-coordinate and y-coordinate of the subsequent circles depending on the previous circle's coordinates.  And the draw() function is in a loop.

In the setup() function, the width and height of the canvas is set with a third parameter of WEBGL.  WEBGL is one of two render modes in p5.js, P2D is the default renderer.  With WEBGL set, we can interact with the z-coordinate along with x-coordinate and y-coordinate.  We can draw in both 2D and 3D.

In the draw() function, the function is in a loop.

<img src="images/star mandala.png" alt="star mandala" width="250" height="250">

## Resources
* https://p5js.org/
* https://p5js.org/get-started/
* https://p5js.org/download/ (for downloading the p5.js library)
* https://cdnjs.com/libraries/p5.js (for linking to a p5.js file hosted online)
* https://p5js.org/reference/
* https://p5js.org/examples/