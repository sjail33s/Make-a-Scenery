//Shania See
//Pascal Huynh
//Web and FX, sect. 00002
//Make a Scenery!
//March 29,2023

/* 
  Instructions:
    Use the mouse to click in order to stamp the sticker.
    Press the spacebar to change the sticker. It will through 6 different ones: grass, sun, cloud, tree, flower, and house.
  
  Analysis:
  I made this program as a way to boost, or at least inspire one’s creativity. 
  As an art student, there are many time’s when I find it difficult to create something new. 
  Therefore, when making this assignment, I wanted to make an outlet that can warm up your mind, and soothe the stress and burden of “artist block”. 
  It’s basically like a pre-workout. 
  It is also why I scrapped the idea of a blank canvas; having too much freedom can override the mind’s ability to make something creative AND meaningful, it is exactly why a blank sheet of paper may seem intimidating to many artists. 
  Thus, I added context with select tools, it is up to the players to use what they have and make something interesting with them.
*/


let sticker = [];
let grass;
let cloud;
let tree;
let flower;
let house;
let sun;
let a=0;

function preload() {
  //these are all the different stickers
  grass = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/grass1.png');
  sun = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/sun.png');
  cloud = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/cloud.png');
  tree = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/tree.png');
  flower = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/flower.png');
  house = loadImage ('https://openprocessing-usercontent.s3.amazonaws.com/files/user364636/visual1879712/h9556db0b13af331966384b96f339d2a6/house.png');
  
  //here, I've defined the contents of my "sticker" array 
  sticker = [grass,sun,cloud,tree,flower,house];
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //the sky
  background(133, 200, 254);
  
  //the field of green
  image(grass,700,700,1500,500);
  
  //First, I had to resize all the PNGs so that they can look proportinal relative to each other and the canvas. Second, I centered them on my mouse so that the stamping is more accurate to the desired position
  imageMode(CENTER);
  grass.resize(824,250)
  sun.resize(200,200);
  cloud.resize(400,240);
  tree.resize(531,560);
  flower.resize(40,37);
  house.resize(277,228)
}

function draw(){
  //text to contextualize the player on the game's concept
  fill(0);
  textSize(50);
  text("Make a Scenery!",50,75);
  
  textSize(20)
  text("Click to Stamp",50,105)
  text("Spacebar to change the stamp",50,125)
}


function mouseClicked(){
  image(sticker[a],mouseX,mouseY);
  //this function is what allows the stamp to actually print the stickers
}
        
function keyPressed(){
  //this associates the 'spacebar' key to switch the stamps
  if(keyCode===32){
    a=a+1;
    }
  if (a===6){
    a=0
    }
  //this function allows the player to cycle through the stickers
}
