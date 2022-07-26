// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */




function toBinary(n){
    return +n.toString(2)
  }


/*
Paramenters will be a whole number 
Return will be a binary number based off the integer 
Example 
  to_binary(1)  - 1
  to_binary(5)  - 101
  to_binary(11) - 1011
Pseudocode
Figure out how to convert numbers to binary
we can use the toString() method to convert numbers to it's binary format 
the toString(2) returns the binary equivalent of the numericac value  
the toString(2) will return a string so we need to convert it back to number with the + operator 
*/