console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.lineWidth = 4
ctx.strokeStyle = "yellow"
ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(0,300);
ctx.lineTo(300,300);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="yellow";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.lineWidth = 4
ctx2.strokeStyle = "darkblue"
ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "blue";
ctx2.fill();

ctx2.beginPath()
ctx2.arc(150,50,50,0, 6.28);
ctx2.stroke();
ctx2.fillStyle = "yellow";
ctx2.fill();