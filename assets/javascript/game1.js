
alert("Type any letter of the alphabet to play. Let's go.")
// //Variables//
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = document.querySelector('#wins');
var losses = document.querySelector("#losses");
var numGuesses = document.querySelector('#guessesleft');
var guessChoices = document.querySelector("#guesschoices"); 
var guessesleft = 10;
var numWins = 0;
var numLosses = 0;
var guessSelections = [];
console.log(wins.textContent);

document.onkeyup = function(event){
    console.log(event);
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    guessChoices.textContent =userGuess;
    guessSelections.push(userGuess);
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    if(userGuess===computerGuess){
        wins++;
        alert("Good job! You've won!");
        guessesleft = 10;
        guessChoices = 0;
    }
    else if(guessesleft===0){
        losses++;
        alert("Sorry, you didn't guess the correct letter. Let's try again.")
        guessesleft = 10;
        guessChoices = 0;
    }
    else if(userGuess!==computerGuess){
        guessesleft--;
    }

    // if(options.indexOf(userGuess) > -1){
    //     if(userGuess===computerGuess){
    //         updatenumGuesses();
    //     }
    //     if(userGuess!==computerGuess){
    //         updatenumGuesses();
    //     }
        
    // }

    // //To update values in HTML//
function updatenumGuesses(){
    numGuesses.textContent= guessesleft;
  }
  updatenumGuesses();
  
   function updatewins(){
    wins.textContent = numWins;
  }
   updatewins();
  
  function updatenumlosses(){
      losses.textContent = numLosses;
  }
  updatenumlosses();
  
   function updateguessChoices(){
      guessChoices.textContent = guessSelections;
  }
  updateguessChoices();
  
  console.log(wins);
  console.log(losses);
  console.log(numGuesses);
  console.log(guesschoices);
}  //This closes out the onkeyup function

