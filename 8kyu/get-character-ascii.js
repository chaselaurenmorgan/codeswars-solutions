// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

function getChar(c){
    // ...
    return String.fromCharCode(c)
  }

/*
Create a function that takes a number and returns the corresponding ASCII char for that valule

Parameters a number that represensts an ASCII char 
Returninga a ASCII char for the value 
Example get_char(65) => 'A'
Pseudocode - use a method that returns a string created from the specified sequence of UTF-16 code unit 
-String.fromCharCode()

*/