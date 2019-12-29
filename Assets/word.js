//create an array of bands
var jamBands = ["allman brothers band","big gigantic","big head todd and the monsters","chris robinson brotherhood","circles around the sun",
"dead and company","galactic","govt mule","greensky bluegrass","lettuce","the new mastersounds","pigeons playing ping pong","robert randolph and the family band",
"spafford","umphreys mcgee"]

var userGuess = []  //The letters guessed by the user 
var computerChoice = ""; 
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var underScores = [];
var incorrectGuess = [];




//=============================================================================================================================
function startGame(){
//CREATE UNDERSCORES BASED ON THE RANDOM WORD CHOSEN BY THE COMPUTER    
    computerChoice = jamBands[Math.floor(Math.random()*jamBands.length)]; //generates random computer from jambands array
    console.log(computerChoice); //prints the random band chosen
   
    var splitChoice = computerChoice.split(""); //splits computerChoice string in separate characters
    console.log(splitChoice)                    //prints the result of the computerChoice split
  
    for(var i=0; i < splitChoice.length; i++) {
        underScores.push("_")                   //loop through the length to push to the underScores []
    }                                            
    console.log(underScores);       
    document.getElementById("wordChoice").innerHTML = underScores.join(" ");  
}

    startGame();
//==============================================================================================================================
var guessed = function(){
    document.getElementById("guesses").innerHTML = guessesLeft;
    }  
      
    guessed();

    var guessedSoFar = function(){
        document.getElementById("guessessofar").innerHTML = userGuess.join(",");
        }  
        guessedSoFar();

//==============================================================================================================================   
document.onkeyup = function(event) {
    var userGuess = event.key;
    var letterKeyed = event.key.toLowerCase();
    console.log(letterKeyed);

    //document.getElementById("guessedsofar").innerHTML = letterKeyed.join(" ");
guessesLeft--;
guessed(); 

if(computerChoice.indexOf(letterKeyed) > -1) {
    console.log(true);
    underScores[computerChoice.indexOf(letterKeyed)] = letterKeyed;
    console.log(underScores);
    underScores[0].innerHTML = underScores.join(' ');
    document.getElementById("wordChoice").innerHTML = underScores.join(" ");
} else {incorrectGuess.push(letterKeyed);
console.log(incorrectGuess)
guessedSoFar();
document.getElementById("guessessofar").innerHTML = incorrectGuess.join(",");
}

}