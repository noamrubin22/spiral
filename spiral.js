window.onload = function () {
  // Define a 2D canvas context and initialize the spiral parameters:
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  var radius = 0;
  var angle = 0;

  // set the spiral style
  context.lineWidth = 4;
  context.strokeStyle = "#0096FF"; // blue-ish color
  context.beginPath();
  context.moveTo(canvas.width / 2, canvas.height / 2);

  // rotate around the center of the canvas 3t imes while increasing the radius and draw line segment
  for (var n = 0; n < 290; n++) {
    // increase radius
    radius += 0.75;
    // make a complete circle every 50 iterations
    angle += (Math.PI * 2) / 50;
    var x = canvas.width / 2 + radius * Math.cos(angle);
    var y = canvas.height / 2 + radius * Math.sin(angle);
    // from previous point to current point
    context.lineTo(x, y);
  }

  context.stroke();
};
