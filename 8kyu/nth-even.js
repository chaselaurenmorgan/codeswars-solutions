// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.


function nthEven(n){
    // your code here
    return (n*2)-2
  }

/*
Create a function that returns the nth even number 
Parameters will be a number and will not be zero
returning the input-th even number 
Example 1 1 --> 0       1, ==0
          3 => 4        0,2,4
          2 =>  2     0 2 
          5 =>        0,2,4,6,8
Pseudocode 
input times 2 
3 * 2 => 6 -2 => 4 
5* 2 => 10 -2 => 8

*/

