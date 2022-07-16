// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.



function move (position, roll) {
    // return the new position
    return position + roll * 2 
  }


/*
Create a function that takes the current position and roll and return a new positon 
Parameters two arguments, position and roll, both take a number 
Returning a number that represents the new position 
Example 0,4 => 8 
        3,6 => 15 
        2,5 => 
Pseudocode 
return the roll multiplied by two and then add the position 
position + roll * 2 
0 + 4 * 2 => 8 
*/