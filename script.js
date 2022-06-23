// create variables for user choice and computer choice
var userChoice;
var computerChoice;

// have the computer choose R, P, S at random
computerChoice = (Math.floor(Math.random() * 3));

// prompt user to enter their choice of rock, paper, or scissors
userChoice = prompt("Let's play a game! Please enter your choice of R, P, or S:");

// do something to see whether the user won, lost, or tied with the computer