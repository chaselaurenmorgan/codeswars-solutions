// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    // Your code here
    return arr.slice(0,n)
  }


/*
Paramenters two arguments. array with a list of numbers and number 
Return => an array of the first (n) elements from the array 
Example => 
[0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]
Pseudocode
Use the slice method on the array to start from the 0 index up until (n) index
*/