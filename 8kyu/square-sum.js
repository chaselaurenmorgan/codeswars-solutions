// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){

    return numbers.map(num => Math.pow(num,2)).reduce((acc,c)=> acc + c,0)


}

console.log(squareSum([1, 2, 2]))




/*
Completing a function that squares each number in arrray  that is passed to it and taking the numbers and summing it together 

Parameters -  An Array of Numbers
Return - Squaring each numbers and then adding them together to a single value 
Example - for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
Psuedocode - iterate over each number in the array to square them and then add all them up 
we could loop through add it to another variable - we can do this with a for loop/for each loop 
or we could use array method such as map and then a reduce.

*/