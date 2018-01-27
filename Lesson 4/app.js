console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create image
var Creeper_Body = new Image();
//set source 
Creeper_Body.src = "Creeper_Body.jpg"

Creeper_Body.onload = function(){
	ctx.drawImage(Creeper_Body, 0, 0, 299, 299);
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

//create image
var Maverick = new Image();
//set source 
Maverick.src = "Maverick.png"

Maverick.onload = function(){
	ctx2.drawImage(Maverick , 0, 0, 299, 299);
}

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");

ctx3.fillStyle = "cyan";
ctx3.fillRect(0,0,800,350);

//create image
var Maverick = new Image();
//set source 
Maverick.src = "Maverick.png"

Maverick.onload = function(){
	ctx3.drawImage(Maverick , 0, 0, 299, 299);
}

ctx3.fillStyle = "green";
ctx3.fillRect(0,350,800,150);