// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    // good luck
    return number % a === 0 && number % b === 0
  }


/*
create a function that checks if integer number is divisible by both integers a and b
Paramaters three inputs that are all integers
Returning  a booleen to see if the number is both divisible by inputs a and input b
Example  45,5, 15 => true    100,2,3 => false 
Psuedocode 
If the number is divisible by both input of a and b then it should equal 0 
we can test this out using a % to  number % a === 0 && number % b === 0
*/