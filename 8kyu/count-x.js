// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array


function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(i * x)
    }
    return z;
  }


/*
Create a function with two inputs and return the array of the first multiple  of the input.
Params are two arguements that are non negative integers. x => is the multiple of  n => which is the count 
Returning an array that starts with x and count by multiplying to the count of n
Example 2,3 => [2,4,6]  5,5 => [5,10,15,20,26]  1,4 => [1,2,3,4]
Psuedocode 
create an empty array variable to hold array of multiples => let Z = []
for loop that start the initializer with 1, and the test condition will be i <=n with i++
to count by the multiples we can use in the block code we can push the code into the empty array and multipy i * x
*/