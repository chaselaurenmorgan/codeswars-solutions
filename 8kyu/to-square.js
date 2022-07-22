// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]


function squareOrSquareRoot(array) {
    return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num)
  }


/*
Create a function that will take in an array an iterate over each number. Return a new array with the following rules. If the number has an integer square root, keep the number, otherwise square the number 
Parameters => an array of numbers which will contain only positve numbers and will never be empty or null 
Returning => a new array that will take the sq rt of numbrer  and square the number if it is not 
example => [ 4, 3, 9, 7, 2, 1 ]  =>[2,9,3,49,4,1 ]
Pseudocode 
to iterate over each number in the array we can use the map method
since we are tranforming and keeping the same length in the array 
array.map(num => Math.sqrt(num) % 1 ===0 ? Math.sqrt(num) : num * num  )
if want to make sure that number is a whole number we can use modulus by 1 or we can use isInteger 
*/                      
