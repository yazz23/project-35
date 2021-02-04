var ball;
var database
var ballonIMG
var backgroundIMG

function preload(){
    ballonIMG = loadImage("Hot Air Ballon-03.png")
    backgroundIMG = loadmage("Hot Air Ballon-01.png")
   
}

function setup(){
    database= firebase.database()
    createCanvas(700,600);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(ballonIMG)
    ball.scale = "0.5"
    var ballref = database.ref('ball/position')
    ballref.on("value",readPosition,errorMessage)

}

function draw(){
    background("white")
    if(keyDown(LEFT_ARROW)){
        updatePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updatePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updatePosition (0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updatePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
    position=data.val()
    ball.x = position.x
    ball.y = position.y
}
function errorMessage(){
    console.log("error in data base")
}
function updatePosition(x,y){
    database.ref ('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}