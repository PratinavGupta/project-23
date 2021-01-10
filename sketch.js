var engine, world;

var ground, helicopter, pack, packbody;
var helicopterIMG, packageIMG;
var prop1;

var wall1, wall2, wall3;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Matter.Engine.create();
	world = engine.world;

	pack = createSprite(400, 200);
	pack.addImage(packageIMG);
	pack.scale = 0.2;

	helicopter = createSprite(400, 200);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.6;

	groundSprite = createSprite(400, height - 35, width, 10);
	groundSprite.shapeColor = color(255);
	prop1 = { isStatic: true };

	packbody = Matter.Bodies.circle(400, 200, 5, prop1);
	Matter.World.add(world, packbody);

	ground = Matter.Bodies.rectangle(400, 650, width, 10, { isStatic: true });
	Matter.World.add(world, ground);

	wall3 = new WALL(350, 650, 10, 110);
	wall1 = new WALL(350, 600, 60, 10);
	wall2 = new WALL(450, 600, 60, 10);
}


function draw() {
	background(0);

	keyPressed();

	if (keyCode == LEFT_ARROW) {
		helicopter.position.x = helicopter.position.x - 5;
	}
	if (keyCode == RIGHT_ARROW) {
		helicopter.position.x = helicopter.position.x + 5;
	}

	packbody.position.x = helicopter.position.x;

	pack.position.x = packbody.position.x;
	pack.position.y = packbody.position.y;

	Matter.Engine.update(engine);
	wall1.display();
	wall2.display();
	wall3.display();
	drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packbody, false);
	}

}