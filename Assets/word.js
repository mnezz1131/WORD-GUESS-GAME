//Arrays and Variables for holding data
var wordOptions = ["buckethead","twiddle","galactic","soulive", "khruangbin","lettuce","sunsquabi","spafford"]; 
var selectedWord = ""; 
var lettersInWord = []; 
var numBlanks = 0; 
var blanksAndSuccesses = [];
var wrongLetters = []; 
var letterGuessed = [];  

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

//=============================================================================================================================
function startGame(){
    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)]; //generates random computer from wordOptions array
    console.log(selectedWord);                                                //prints the random band chosen
   
    var lettersInWord = selectedWord.split("");                               //splits selectedWord string in separate characters
    console.log(lettersInWord)                                                //prints the result of the selectedWord split
                                                                              
    numBlanks = lettersInWord.length;                                         //assigns numBlanks to the lettersInWord Array
    console.log(numBlanks);    
                                                                            
//Reset    
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

//loop through the length to push to the blanksAndSuccesses []
   for (var i=0; i<numBlanks; i++) {                              
        blanksAndSuccesses.push("_")                  
    }                                            
    console.log(blanksAndSuccesses);       
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");  
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;  
    document.getElementById("lossCounter").innerHTML = lossCount;
}

function checkLetters (letter) {
    var isLetterInWord = false; 
    //Checks to see if letter exists at all in word

    for (var i=0; i< numBlanks; i++) {
        if (selectedWord[i] == letter) {
          isLetterInWord = true;
        }
    }
//check where letter exists
if(isLetterInWord) {
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
    
}

else{
    wrongLetters.push(letter);
    guessesLeft--
}

console.log(blanksAndSuccesses)


}

function roundComplete () {
  //  console.log("Win Count: " + winCount + "| Loss Count: " + lossCount  + "| Guesses Left: "+ guessesLeft);
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
 //blanks And Successes is consoled on line 67
 //letterInWord is consoled on line 21
   
  if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("YOU WON!");

         document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }

  else if (guessesLeft == 0){
    lossCount++;
  alert("YOU LOST!!");
    document.getElementById("lossCounter").innerHTML = lossCount;
  startGame();
   }
}

//Main Process==============================================================================================================================
startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 
    checkLetters(letterGuessed);
    roundComplete();
   


}