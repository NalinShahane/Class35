var ball;
var db , hb;
var position;
function setup()
{

    db = firebase.database();

    console.log(db);
    createCanvas(500,500);
   
    hb = createSprite(250,250,10,10);
    hb.shapeColor = "red";

    var hbp = db.ref('ball/position');
    hbp.on("value" , readPosition , showError);

}

function draw(){
    background("white");
   // if(keyDown(LEFT_ARROW))
    //{
      //  writePosition(-1,0);
   // }

   // else if(keyDown(RIGHT_ARROW))
   // {
   //     writePosition(1,0);
    //}
    //else if(keyDown(UP_ARROW))
   // {
   //     writePosition(0,-1);
   // }
   // else if(keyDown(DOWN_ARROW))
    //{
   //     writePosition(0,+1);
    //}
   // drawSprites();
}

function writePosition(x,y){
    db.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y      
})
}

function readPosition (data) 
{
    position = data.val();
    hb.x = position.x;
    hb.y = position.y;
}

function showError() {
    console.log("error");
}