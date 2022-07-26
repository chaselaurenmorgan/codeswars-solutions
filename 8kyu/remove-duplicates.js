// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.


function distinct(a) {
    return a.filter((el,index,arr)=> index === arr.indexOf(el));
  }

/*
Create a function that removes the duplicates 
Paramenters will be and array with repeated elements 
Return an array without the duplicates 
Example => [1,2,2] - [1,2]
          [1] -[1]
Pseudocode 
use the array method to filter the duplicated out of the array. if index 
matches the index of the element then it should only return the unique value
*/