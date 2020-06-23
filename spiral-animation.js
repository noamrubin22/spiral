function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  // Define a 2D ctx context and initialize the spiral parameters:
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var radius = 0;
  var angle = 0;

  // set the spiral style
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#0096FF"; // blue-ish color
  ctx.beginPath();
  ctx.moveTo(ctx.width / 2, ctx.height / 2);

  // rotate around the center of the ctx 3t imes while increasing the radius and draw line segment
  for (var n = 0; n < 290; n++) {
    // increase radius
    radius += 0.75;
    // make a complete circle every 50 iterations
    angle += (Math.PI * 2) / 50;
    var x = ctx.width / 2 + radius * Math.cos(angle);
    var y = ctx.height / 2 + radius * Math.sin(angle);
    // from previous point to current point
    ctx.lineTo(x, y);
    //   ctx.save();
    //   ctx.restore();

    window.requestAnimationFrame(draw);
  }
}
init();
