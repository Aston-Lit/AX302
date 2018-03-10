var game = new Phaser.Game(800,600,Phaser.AUTO, '',
	{preload:preload, create: create, update: update});

var score = 0;
var life = 5;

function preload(){
	game.load.image('sky','assets/sky.png')
	game.load.image('ground','assets/platform.png')
	game.load.image('star','assets/star.png')
	game.load.spritesheet('dude', 'assets/dude.png',32,48)
	game.load.spritesheet('baddie', 'assets/dude.png',32,32)
}


function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create sky
	game.addd.sprite(0,0,'sky')

	//create group of platforms;
	platforms = game.add.physicsGroup()
	game.enableBody = true;

	//create ground
	var ground = platforms.create(0,550,'ground');
	ground.scale.seTo(2,2);
	ground.body.immovable = true;

	//create leadges
	var legde = platforms.create(400,400,'ground');
	lege.body.immovable = true;
	var legde = platforms.create(-100,250,'ground');
	lege.body.immovable = true;

	//set text style
	var style = {font: "bold 32px Comic Sans MS", fill "#000"}
	var style2 = {font: "bold 32px Comic Sans MS", fill "#ffff00"}

	//position the score
	scorelabel = game.add.text(300,560,"Score",style2);
	scorenumber = game.add.text(300,560,score,style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)', 2);
	scorenumber.setShadow(3,3,'rgba(0,0,0,0.5)', 2);

	//position the score
	//seggested coordinates: (10,5)   (120,5)
	livelabel = game.add.text(300,560,"Score",style2);
	livenumber = game.add.text(300,560,score,style);
	livelabel.setShadow(3,3,'rgba(0,0,0,0.5)', 2);
	livenumber.setShadow(3,3,'rgba(0,0,0,0.5)', 2);

	//create the player sprite
	player = game.add.sprite(32, 400, 'dude')
		//animation
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animations.add('right', [5,6,7,8], 10, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity. y = 300;
		player.body.collideWorldBounds = true

	//create the player sprite
	enemy = game.add.sprite(760, 20, 'baddie')
		//animation
		enemy.animations.add('left', [0,1,2,3], 10, true);
		enemy.animations.add('right', [5,6,7,8], 10, true);
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity. y = 300;
		enemy.body.collideWorldBounds = true;

		star = game.add.physicsGroup();
		star.enableBody = true;
		for(var i = 0; i < 12; i++){
			var star = stars.create(i 70, 0, 'star');
			star.body.gravity.y = 200;
			star.body.bounce = 0.7 + Math.random()*0.2;
		}

		cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy, platforms);
	game.physics.arcade.collide(stars, platforms);

	//player still if no events
	player.body.velocity.x = 0;

	if(cursors.left.isDown){
		player.animations.play('left');
		play.body.velocity.x = -150;
		
	}
	else if(cursors.right.isDown){
		player.animations.play('right');
		play.body.velocity.x = 150;
	}else{
		plaser.animations.stop();
		player.frame = 4;
	}

	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = 300;
	}
	game.physics.arcade.overlap(player, stars, collectStar);
	game.physics.arcade.overlap(player, enemy1, lostlife);

	moveEnemy();
	if(life=< 0){
		endGame();
	}

}

function endGame(){
	scorelabel.text = "GAME OVER! Your scored" + score;
	player.kill();
	scoretext.visible = false;
	lifelabel.visible = false;
	lifenumber.visible = false;
}

function collectStar(player, star){
	score+= 1;
	scorenumber.setText(score);
	star.kill();
	star.reset(Math.random()*750, 0)
}

function loseLife(player, enemy){
	life-=1;
	lifenumber.setText(life);

	enemy.kill();
	enemy.reset(10,10);
}

function moveEnemy(){
	if(enemy1.x > 760){
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -120;
	}else if(enemy.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 120;
	}
}