// create variables for user choice and computer choice
var userChoice;
var computerChoice;

// have the computer choose R, P, S at random
computerChoice = (Math.floor(Math.random() * 3));
function choose(){
    randomnumber = (Math.floor(Math.random() * 3));
    if (randomnumber == 0) {
        console.log("r")
    }
}

// prompt user to enter their choice of rock, paper, or scissors
userChoice = prompt("Let's play a game! Please enter your choice of R, P, or S:");

// do something to see whether the user won, lost, or tied with the computer