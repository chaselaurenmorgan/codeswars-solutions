// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



function invert(array){
    return array.map(num => -num)
}





/*
Create a function where a given set of numbers returns the opposite/inverse of each number. Positve becomes a negative and a negative becomes a positive 

Parameter is an array with integers and it can also be empty 
Returning the opposite of each number and empty array for an empty array 
Example [1,2,3,4] => [-1,-2,-3,-4]
        [2,-4,6,-9] => [-2,4,-6,9]
Psuedocode 
1.iterate through the array using a map of for loop 


*/