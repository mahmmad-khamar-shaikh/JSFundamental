function drowRectangle() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000"; // Red color
  const rectWidth = 150;
  const lineCordinate = rectWidth / 2;
  ctx.fillRect(0, 0, 150, 75); // Rectangle position and dimensions

  ctx.lineWidth = 1;
  ctx.strokeStyle = "blue";

  ctx.beginPath();
  ctx.moveTo(lineCordinate, 0);
  ctx.lineTo(lineCordinate, 75);
  ctx.stroke();
}

drowRectangle();
