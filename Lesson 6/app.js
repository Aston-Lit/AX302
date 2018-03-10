console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 1000;
var HEIGHT = 800;

var x = 300;
var y = 300;
var s = 50;

mx = 0;
my = 0;

var itemX;
var itemY;
var itemS;

var collision = false;

var score = 0;

function drawPlayer(){
	var player = new Image();
	player.src = "Pacman.jpg";
	ctx.drawImage(player,x,y,s,s)
}

function drawItem(){
	var item = new Image();
	item.src = "Ball.png";
	ctx.drawImage(item,itemX,itemY,itemS,itemS)
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function init (){
	itemX = Math.floor(Math.random()*(WIDTH- itemS));
	itemY = Math.floor(Math.random()*(WIDTH- itemS));

	window.onkeydown = keydownControl;

	return setInterval(draw, 10);
}

function keydownControl(e){
	if (e.keycode == 65){
		mx = -4;
		my = 0;
	} else if(e.keycode == 87){
		mx = 0;
		my = -4;
	}else if(e.keycode == 68){
		mx = 4;
		my = 0;
	}else if(e.keycode == 83){
		mx = 0;
		my = 4;
	}
}

function draw(){
	clear();
	drawPlayer();
	drawItem();

	if(x+mx < 0 || x+mx >WIDTH -s){
		mx = -mx;
	}

	if(y+my < 0 || y+my> HEIGHT -s){
		my = -my;
	}

	x += mx;
	y += my;

	collisionCheck();
	collisionHandle();
}

function collisionCheck(){
	if ((x+s >= itemX) && (x<= itemX + itemS)
		(y+s >= itemY) && (y<= itemY + itemS)){
		collision = true;
	} else {
		collision = false;
	}
}

function collisionHandle(){
	if (collision) {
		itemX = Math.floor(Math.random()*(WIDTH- itemS));
	itemY = Math.floor(Math.random()*(WIDTH- itemS));

	score += 1;
	document.getElementById("score").innerHTML = "Score: " + score;
	}
}

init();