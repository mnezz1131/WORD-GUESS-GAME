//. Use key events to listen for the letters that your players will type.
//. Press any key to get started!
//. Wins: (# of times user guessed the word correctly).
//* If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
//* As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
//. Number of Guesses Remaining: (# of guesses remaining for the user).
//. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
//. After the user wins/loses the game should automatically choose another word and make the user play it.

//When game starts
//Provides the correct amount of blanks to the screen - based off the array choices
//When user clicks letter - it replaces the _ with the chocsen letter 




// use the onkey.up function to track the user guesses
// need to figure out how to stop duplicate letter choices 
// Set a Var bands = to an array with 5 bands in it
var jamBands = ["umphreys mcgee","lettuce","spafford","marcus king", "dead and co"]  
var userGuess = []  //The letters guessed by the user 
//Awaits for the computer to randomly choose a band  from the array (jamBands)
var computerChoice = ""; 
var wins = 0;
var guessesLeft = 10;

//Re-useable function : place it in a global variable - which is just a 
    //variable that standds outside of  { }




function startGame(){
    var blankSpaces = [];
    
    //Create var that holds the choseComputerWord 
    //// set function to randomly pick one of the bands from the array
    
    computerChoice = jamBands[Math.floor(Math.random()*jamBands.length)]; 
    console.log(computerChoice); 


    //Create var that holds the length of the chosen word
    var splitChoice = computerChoice.split("");
    var splitLength = splitChoice.length;
    //loop through the length to push to the blankSpaces []
        for(var i=0; i<splitLength; i++) {
            blankSpaces.push("_")
        }
        //Don't need # for Id, already in getElementbyId
        document.getElementById("wordChoice").innerHTML = blankSpaces.join(" ");
        console.log(blankSpaces);
}

    startGame();

 // if(computerChoice){
   // document.querySelector("#wordChoice").innerHTML = computerChoice;
  // }
   

  //querySelector - you have to specify if it is class (.) or id (#)
  // getElementbyId or getElementbyClass -it is already 'type' is already specified 
        // so you do not need to use . or # 

 