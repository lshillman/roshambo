// create variables for user choice and computer choice
var userChoice;
var computerChoice;

// have the computer choose R, P, S at random
function choose(){
    randomnumber = (Math.floor(Math.random() * 3));
    if (randomnumber == 0) {
        computerChoice = "R";
    }
    else if(randomnumber == 1) {
        computerChoice = "P";
    }
    else if(randomnumber == 2) {
        computerChoice = "S";
    }
    console.log("Computer chooses " + computerChoice + "!");
}

choose();

// prompt user to enter their choice of rock, paper, or scissors
userChoice = prompt("Let's play a game! Please enter your choice of R, P, or S:");

if (userChoice == computerChoice) {
    alert("It's a tie!");
} else if ((userChoice == R) && (computerChoice == P)) {
    alert("The computer wins");
}

// do something to see whether the user won, lost, or tied with the computer