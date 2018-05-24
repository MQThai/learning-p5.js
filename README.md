# learning-p5.js

## Getting Started
* In a folder, make an ```index.html``` and a ```sketch.js``` file
* You have two ways to link the p5.js library to ```index.html```:
   1. Download the p5.js library and link it in your folder
   2. Link to a p5.js file hosted online
* If you chose to link to a p5.js file hosted online like I did for this, add 
```<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>``` 
to the head of ```index.html```.  Don't forget to link ```sketch.js``` in the head also.

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

## Make a circle
Let's see if everything is linked up correctly.  We'll have a circle appear.  In ```sketch.js```, add the following:

## Resources
* https://p5js.org/
* https://p5js.org/get-started/
* https://p5js.org/download/ (for downloading the p5.js library)
* https://cdnjs.com/libraries/p5.js (for linking to a p5.js file hosted online)
* https://p5js.org/reference/