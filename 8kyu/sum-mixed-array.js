// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){

    return x.map(Number).reduce((acc,c) => acc + c,0)
}


/*
Create a function the returns sum of array as numbers 
Paramaters array that contains a string of numbers , or itegers 
Returning sum of the array as a number 
Example ['1',2,'3'] => 6 ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42  [9, 3, '7', '3'] =>22
Psuedcode
change all the numbers in the array into number - map()
reduce it to a single value using reduce()
*/