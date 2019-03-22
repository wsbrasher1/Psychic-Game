

//To begin game//

alert("You have ten guesses. Type in an letter of the alphabet to play");

//Variables//

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var counter = 0;
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessLetter = null;
var guessSofar = [];
{/* var userGuess = event.keyCode;
var computerSelection = computerChoices[math.floor(math.random())*computerChoices.length)]; */}

// To generate random letter for user to guess //

function updateGuessLetter(){
    guessLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(guessLetter)
}

// To update guesses remaining area //

function updateGuessLeft(){
    document.getElementById("remainder").innerHTML = guessLeft;
}

// To show users guesses so far //

function updateGuessSofar(){
    document.getElementById("sofar").innerHTML = guessSofar;


updateGuessLetter();

updateGuessLeft();

updateGuessSofar();


document.onkeypress = function(event){
    var guessSofar = event.key;
    console.log(event);
    console.log(event.key);

} 
    // if(userGuess===computerChoices){
    //     wins++;
    //     guessLeft--;
    //     guessChoices = [];
    //     winsText.textContent = "wins:" + wins;
    // }

    // else if(userGuess!==computerChoices){
    //     guessLeft--;
    //     guessChoices = [];
    //     lossesText.textContent = "losses:" + losses;

    // }
    
}
