var batteryCharge = 0;
var battery;
var gameState = "play";
var time = 30;

function preload () {
  pacImg = loadImage("pac1.jpg");
  monImg = loadImage("hello.png");
}

function setup(){
 canvas = createCanvas(1700,500);

  button = createSprite(300,100,100,50);
  button.visible = false;

  snake = createSprite(200, 100, 20, 20);
  snake.velocityX = 2;
  snake.addImage("sn", pacImg);
  snake.scale = 0.3;
  snake.setCollider("rectangle", 0,0,300,300);

  monster1 = createSprite(700,280,20,20);
  monster1.velocityX = -4;
  monster1.addImage("m", monImg);
  monster1.scale = 0.06;
  monster1.setCollider("rectangle", 0,0,300,300);

  monster2 = createSprite(800,80,20,20);
  monster2.velocityX = -4;
  monster2.addImage("m", monImg);
  monster2.scale = 0.06;
  monster2.debug = true;
  monster2.setCollider("rectangle", 0,0,300,300);

  monster3 = createSprite(300,260,20,20);
  monster3.velocityX = -4;
  monster3.addImage("m", monImg);
  monster3.scale = 0.06;
  monster3.setCollider("rectangle", 0,0,300,300);

  monster4 = createSprite(1100,280,20,20);
  monster4.velocityY = -4;
  monster4.addImage("m", monImg);
  monster4.scale = 0.06;
  monster4.setCollider("rectangle", 0,0,300,300);
  
  border1 = createSprite(20,220,5,340);
  border1.shapeColor = "yellow";
  border2 = createSprite(600,50,1160,5);
  border2.shapeColor = "yellow";
  border3 = createSprite(1180,220,5,340);
  border3.shapeColor = "yellow";
  border4 = createSprite(600,390,1160,5);
  border4.shapeColor = "yellow";
 
  line1 = createSprite(95,100,150,10);
  line1.shapeColor = "white";
  line2 = createSprite(170,110,10,50);
  line2.shapeColor = "white";
  line3 = createSprite(295,120,100,10);
  line3.shapeColor = "white";
  line4 = createSprite(290,90,10,60);
  line4.shapeColor = "white";
  line5 = createSprite(400,190,10,200);
  line5.shapeColor = "white"; 
  line6 = createSprite(450,170,100,10);
  line6.shapeColor = "white";
  line7 = createSprite(50,200,10,130);
  line7.shapeColor = "white"; 
  line8 = createSprite(100,200,110,10);
  line8.shapeColor = "white"; 
  line9 = createSprite(150,260,10,120);
  line9.shapeColor = "white"; 
  line10 = createSprite(80,340,10,90);
  line10.shapeColor = "white"; 
  line11 = createSprite(160,320,100,10);
  line11.shapeColor = "white";
  line12 = createSprite(300,240,10,100);
  line12.shapeColor = "white";
  line13 = createSprite(350,350,120,10);
  line13.shapeColor = "white";
  line14 = createSprite(570,300,10,130);
  line14.shapeColor = "white";
  line15 = createSprite(520,300,110,10);
  line15.shapeColor = "white";
  line16 = createSprite(550,70,130,10);
  line16.shapeColor = "white";
  line17 = createSprite(570,120,10,100);
  line17.shapeColor = "white";
  line18 = createSprite(350,360,10,35);
  line18.shapeColor = "white";
  line19 = createSprite(750,200,200,10);
  line19.shapeColor = "white"; 
  line20 = createSprite(760,200,10,200);
  line20.shapeColor = "white";
  line21 = createSprite(900,100,10,100);
  line21.shapeColor = "white";
  line22 = createSprite(700,370,100,10);
  line22.shapeColor = "white";
  line23 = createSprite(700,200,100,10); 
  line23.shapeColor = "white"; 
  line24 = createSprite(900,300,150,10);
  line24.shapeColor = "white"; 
  line25 = createSprite(1050,200,10,200);
  line25.shapeColor = "white";
  line26 = createSprite(1100,370,100,10);
  line26.shapeColor = "white";

  charge1 = createSprite(100,150,30,30);
  charge1.shapeColor = "green";
  charge3 = createSprite(120,350,30,30);
  charge3.shapeColor = "green";
  charge4 = createSprite(200,200,30,30);
  charge4.shapeColor = "green";
  charge5 = createSprite(200,350,30,30);
  charge5.shapeColor = "green";
  charge6 = createSprite(350,250,30,30);
  charge6.shapeColor = "green";
  charge7 = createSprite(500,130,30,30);
  charge7.shapeColor = "green";
  charge8 = createSprite(500,230,30,30);
  charge8.shapeColor = "green";
  charge9 = createSprite(480,330,30,30);
  charge9.shapeColor = "green";
  charge10 = createSprite(600,300,30,30);
  charge10.shapeColor = "green";
  charge11 = createSprite(700,250,30,30);
  charge11.shapeColor = "green";
  charge12 = createSprite(700,150,30,30);
  charge12.shapeColor = "green";
  charge13 = createSprite(900,200,30,30);
  charge13.shapeColor = "green";
  charge14 = createSprite(900,350,30,30);
  charge14.shapeColor = "green";
  charge15 = createSprite(1000,250,30,30);
  charge15.shapeColor = "green";
  charge16 = createSprite(950,100,30,30);
  charge16.shapeColor = "green";
  charge17 = createSprite(1150,200,30,30);
  charge17.shapeColor = "green";
}


function draw(){
  background(0);

  if(gameState === "play"){
    snake.x = mouseX;
    snake.y = mouseY;
    createEdgeSprites();
    move();
    snake.bounceOff(line1);
    snake.bounceOff(line2);
    snake.bounceOff(line3);
    snake.bounceOff(line4);
    snake.bounceOff(line5);
    snake.bounceOff(line6);
    snake.bounceOff(line7);
    snake.bounceOff(line8);
    snake.bounceOff(line9);
    snake.bounceOff(line10);
    snake.bounceOff(line11);
    snake.bounceOff(line12);
    snake.bounceOff(line13);
    snake.bounceOff(line14);
    snake.bounceOff(line15);
    snake.bounceOff(line16);
    snake.bounceOff(line17);
    snake.bounceOff(line18);
    snake.bounceOff(line19);
    snake.bounceOff(line20);
    snake.bounceOff(line21);
    snake.bounceOff(line22);
    snake.bounceOff(line23);
    snake.bounceOff(line24);
    snake.bounceOff(line25);
    snake.bounceOff(line26);
    snake.collide(border1);
    snake.collide(border2);
    snake.collide(border3);
    snake.collide(border4);

    monster1.bounceOff(line1);
    monster1.bounceOff(line2);
    monster1.bounceOff(line3);
    monster1.bounceOff(line4);
    monster1.bounceOff(line5);
    monster1.bounceOff(line6);
    monster1.bounceOff(line7);
    monster1.bounceOff(line8);
    monster1.bounceOff(line9);
    monster1.bounceOff(line10);
    monster1.bounceOff(line11);
    monster1.bounceOff(line12);
    monster1.bounceOff(line13);
    monster1.bounceOff(line14);
    monster1.bounceOff(line15);
    monster1.bounceOff(line16);
    monster1.bounceOff(line17);
    monster1.bounceOff(line18);
    monster1.bounceOff(line19);
    monster1.bounceOff(line20);
    monster1.bounceOff(line21);
    monster1.bounceOff(line22);
    monster1.bounceOff(line23);
    monster1.bounceOff(line24);
    monster1.bounceOff(line25);
    monster1.bounceOff(line26);

    monster2.bounceOff(line1);
    monster2.bounceOff(line2);
    monster2.bounceOff(line3);
    monster2.bounceOff(line4);
    monster2.bounceOff(line5);
    monster2.bounceOff(line6);
    monster2.bounceOff(line7);
    monster2.bounceOff(line8);
    monster2.bounceOff(line9);
    monster2.bounceOff(line10);
    monster2.bounceOff(line11);
    monster2.bounceOff(line12);
    monster2.bounceOff(line13);
    monster2.bounceOff(line14);
    monster2.bounceOff(line15);
    monster2.bounceOff(line16);
    monster2.bounceOff(line17);
    monster2.bounceOff(line18);
    monster2.bounceOff(line19);
    monster2.bounceOff(line20);
    monster2.bounceOff(line21);
    monster2.bounceOff(line22);
    monster2.bounceOff(line23);
    monster2.bounceOff(line24);
    monster2.bounceOff(line25);
    monster2.bounceOff(line26);

    monster3.bounceOff(line1);
    monster3.bounceOff(line2);
    monster3.bounceOff(line3);
    monster3.bounceOff(line4);
    monster3.bounceOff(line5);
    monster3.bounceOff(line6);
    monster3.bounceOff(line7);
    monster3.bounceOff(line8);
    monster3.bounceOff(line9);
    monster3.bounceOff(line10);
    monster3.bounceOff(line11);
    monster3.bounceOff(line12);
    monster3.bounceOff(line13);
    monster3.bounceOff(line14);
    monster3.bounceOff(line15);
    monster3.bounceOff(line16);
    monster3.bounceOff(line17);
    monster3.bounceOff(line18);
    monster3.bounceOff(line19);
    monster3.bounceOff(line20);
    monster3.bounceOff(line21);
    monster3.bounceOff(line22);
    monster3.bounceOff(line23);
    monster3.bounceOff(line24);
    monster3.bounceOff(line25);
    monster3.bounceOff(line26);

    monster4.bounceOff(line1);
    monster4.bounceOff(line2);
    monster4.bounceOff(line3);
    monster4.bounceOff(line4);
    monster4.bounceOff(line5);
    monster4.bounceOff(line6);
    monster4.bounceOff(line7);
    monster4.bounceOff(line8);
    monster4.bounceOff(line9);
    monster4.bounceOff(line10);
    monster4.bounceOff(line11);
    monster4.bounceOff(line12);
    monster4.bounceOff(line13);
    monster4.bounceOff(line14);
    monster4.bounceOff(line15);
    monster4.bounceOff(line16);
    monster4.bounceOff(line17);
    monster4.bounceOff(line18);
    monster4.bounceOff(line19);
    monster4.bounceOff(line20);
    monster4.bounceOff(line21);
    monster4.bounceOff(line22);
    monster4.bounceOff(line23);
    monster4.bounceOff(line24);
    monster4.bounceOff(line25);
    monster4.bounceOff(line26);
    monster4.bounceOff(border1);
    monster4.bounceOff(border2);
    monster4.bounceOff(border3);
    monster4.bounceOff(border4);

    if(frameCount%30===0){
      time = time - 1;
    }

    if(snake.collide(charge1)){
      batteryCharge = batteryCharge + 1;
      charge1.destroy();
    }

    if(snake.collide(charge3)){
      charge3.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge4)){
      charge4.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge5)){
      charge5.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge6)){
      charge6.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge7)){
      charge7.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge8)){
      charge8.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge9)){
      charge9.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge10)){
      charge10.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge11)){
      charge11.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge12)){
      charge12.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge13)){
      charge13.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge14)){
      charge14.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge15)){
      charge15.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge16)){
      charge16.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(charge17)){
      charge17.destroy();
      batteryCharge = batteryCharge + 1;
    }

    if(snake.collide(monster1)){
      time = time - 5;
      monster1.destroy();
    }

    if(snake.collide(monster2)){
      monster2.destroy();
      time = time - 5;
    }

    if(snake.collide(monster3)){
      monster3.destroy();
      time = time - 5;
    }

    if(snake.collide(monster4)){
      monster4.destroy();
      time = time - 5;
    }

    textSize(24);
    fill(255);
    text("MONSTER MAZE", 430,40);
    text("HOW TO PLAY",1300,80);
    text("1) Eat all the green squares to", 1240,120);
    text("charge your monster before time runs out!", 1240,160);
    text("2) Move the moster with your hand",1240,200);
    text("3) You loose five seconds if you", 1240,240);
    text("touch a monster!", 1240,280);
    textSize(50);
    fill("lightblue");
    text("CHARGE:" + batteryCharge,250,450);
    text("TIME: " + time,600,450);
    drawSprites();

    if(time<=0 && batteryCharge<16){
      gameState = "loose";
    }

    if(time===0 && batteryCharge === 16){
      gameState = "won";
    }
}

  if(gameState === "won"){
    textSize(100);
    fill(255);
    text("YOU WON!!",300,300);
  }

  if(gameState==="loose"){
    textSize(100);
    text("OH NO! YOU LOST!", 300,200);
    text("GAME OVER", 300,400);
  }
}

function move () {
  if (keyDown("UP_ARROW")) {
    snake.setSpeedAndDirection(4, -90);
 }
 if (keyDown("DOWN_ARROW")) {
    snake.setSpeedAndDirection(4, 90);
 }
 if (keyDown("LEFT_ARROW")) {
    snake.setSpeedAndDirection(4, 180);
 }
 if (keyDown("RIGHT_ARROW")) {
    snake.setSpeedAndDirection(4, 0);
 }
}