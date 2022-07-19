// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

function stringy(size) {
    // your code here   
    let str = ''
    for(let i = 1; i <= size; i++){
        str += i%2
    }
    return str
  }

/*
Create a function that takes a size and returns a string of alernating 1's and 0s the string should start with 1. The size will always be positive and only use whole numbers 

Parameters => a number that will be whole an positive 
Return => a string of 1 an 0's. the string should start with 1
Example => 6 should return :'101010'
           4 should return : '1010'
            12 should return : '101010101010'
Pseudocode
create a empty string variable 
create for loop that goes of number  of times 
add '1' and '0' to the string 

*/