var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,background_img, startbg_img;

function preload(){
  track = loadImage("./Images/track.jpg");
  car1_img = loadImage("./Images/car1.png");
  car2_img = loadImage("./Images/car2.png");
  car3_img = loadImage("./Images/car3.png");
  car4_img = loadImage("./Images/car4.png");
  ground = loadImage("./Images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
