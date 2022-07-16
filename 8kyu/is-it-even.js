// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.


function testEven(n) {
    //Your awesome code here!
  return n % 2 === 0
}

/*
Create a function to determine if the input is an even number 
Parameters => Numbers may be positive or negative, integers or floats.
Return => A boolean to determine if the number is even or not 
Example 0 => true    7 => false    -4 => true 
Pseudocode 
use the modulus symbol to get a remainer of 0 determine if the number is even 
*/