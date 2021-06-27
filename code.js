var bullet, wall;
var bulletImage, bullet2, wallSound;
var v, w, h, weight, thickness, speed;


function preload() {
    bulletImage = loadImage("bullet.png");
    bullet2 = loadImage("bullet2.png");

    wallSound = loadSound("wall.mp3");
}

function setup() {

    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);

    weight = Math.round(random(30,52));
    thickness = Math.round(random(22,83));
    speed = Math.round(random(223,321));
    console.log(v);

    bullet = createSprite(80,h/2,20,20);
    bullet.addImage(bulletImage);
    bullet.debug = true;
    bullet.scale = 0.42;
    bullet.velocityX = Math.round(random(30,50));;
    bullet.setCollider("rectangle",0,0,bullet.width,bullet.height);

    wall = createSprite(w/1.2,h/2,thickness,h/1.5);
}

function draw() {
    background("skyBlue");

    if (touching(wall,bullet)) {
        var d = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
        bullet.velocityX = 0;
        
        bullet.addImage(bullet2);

      if (d > 10) {
        wall.visible = false;
        wallSound.play();
    }
    }

    drawSprites();
}

function touching(a,b) {
    if (a.x - b.x < a.width/2 + b.width/2) {
        return true;
    } else {
        return false;
    }
}
