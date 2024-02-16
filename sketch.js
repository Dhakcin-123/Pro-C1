var splashscreen;
var playbutton,aboutbutton;
var gameState="wait";

function preload(){
    splashscreen = loadImage("assets/The hunters union.gif");
}

function setup(){
createCanvas(windowWidth,windowHeight);

playbutton= createImg("assets/Play_button.png");
playbutton.position(width-300,height-100);
playbutton.size(200,75);

aboutbutton= createImg("assets/info.png");
aboutbutton.position(width-1300,height-600);
aboutbutton.size(200,75);
}

function draw(){
    if(gameState=="wait"){
    background(splashscreen);
}
    playbutton.mousePressed(()=>{
        gameState="play";
        playbutton.hide();
   })

   aboutbutton.mousePressed(()=>{
        gameState="play";
        aboutbutton.hide();
})

if(gameState=="play"){
    background("red");
}
}
