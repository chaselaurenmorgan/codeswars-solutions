// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    return n > m ? n % m : m % n
  }

/*
Parameters => two numbers one will be greater than the other
Return => the remainer of the larger number by smaller number 
Example => 
  / Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
Pseudocode 
  if the n is greater m the return the remainder else return the return the remainder of m  by .  
  When can use a ternary operator to test the conditions and to find the remainder of a number we use % 
*/