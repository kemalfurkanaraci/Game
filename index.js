var clickUser = [];
var oldGame = [];
var level = 0;

var started = false;

function auidOfGame(id){
        switch(id){
            case "green":
                var audioOfGreen = new Audio("./sounds/green.mp3").play();
            case "red":
                var audioOfRed = new Audio("./sounds/red.mp3").play();
            case "blue":
                var audioOfBlue = new Audio("./sounds/blue.mp3").play();
            case "yellow":
                var audioOfYellow = new Audio("./sounds/yellow.mp3").play();
            case "wrong":
                var audioOfWrong = new Audio("./sounds/wrong.mp3").play();
        }     
}


$(document).keypress(function(event){
    
    if(!started){
        $("h1").text("Level "+ level);
        startGame();
        started = true;
    }
  });

$(".btn").click(function(){
    var clickOfID = $(this).attr("id")
    clickUser.push(clickOfID);
    auidOfGame(clickOfID);
    checkGame(clickUser.length-1);
});

function startGame(){
    clickUser = [];
    
    level++;

    $("h1").text("Level " +level);
    var title = getOfId();
    oldGame.push(title);
    
    $("#"+title).fadeIn(100).fadeOut(100).fadeIn(100);
    auidOfGame(title);
 }
       


function getOfId()
{
    var randomNumber = Math.floor(Math.random() * 4 );
    var arrayOfId = [];
     $(".btn").each(function(){
        arrayOfId.push($(this).attr("id"));
    })

    return arrayOfId[randomNumber];

}



function checkGame(currentLevel){

   if(oldGame[currentLevel] === clickUser[currentLevel] ) {
       console.log("succes");

       if(oldGame.length === clickUser.length){
           setTimeout(function(){
               startGame();
           },1000);
       }
   }
   else {
       console.log("wrong");

       auidOfGame("wrong");

       $("body").addClass("game-over");
       setTimeout(function(){
           $("body").removeClass("game-over")
       },200);

       $("h1").text("Game Over, Press any key to restart");
       oldGame= [];
       level=0;
       started = !started;
   }
}









