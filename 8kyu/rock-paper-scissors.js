// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
    if(p1 === 'rock' && p2 === 'scissors' || 
       p1 === 'scissors' && p2 === 'paper'||
       p1 === 'paper' && p2 === 'rock'){
        return 'Player 1 won!'
    }else if (p2 === 'rock' && p1 === 'scissors' ||
              p2 === 'scissors' && p1 === 'paper' ||
              p2 === 'paper' && p1 === 'rock'){
        return 'Player 2 won!'
    }else 
    return 'Draw!'
};



/*
Create fuction to play rock paper scissors. You have return which player run and if there is a draw run draw

Parameters two inputs for p1 and p2 and the inputs has toa string of rock paper or scissors 
Return the following strings => "Player 1 won!", "Player 2 won!", "Draw!"
Example 'rock', 'scissors' => "Player 1 won!" , 
        'paper', 'scissors' => "Player 2 won!"
        'rock', 'rock ' => 'Draw'
Psuedocde 
if/else statement 
comparing the all of the test conditions starting with player 1 
then compare all the winning test condition for player 2 
and then the default else for 'Draw'
*/