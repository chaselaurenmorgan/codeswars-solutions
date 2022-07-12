// Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((acc,c)=>{acc * c},1)
}


/*
Create a function of intergers and return the results of multiplying the numbers together
Parameters it will be array that is non empty 
Returning a single value of the elements in the array multiplied by each other 
Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
Psuedocode 
We need iterate through the array to multiply each of the elements we can use a reduce method or a loop 
*/
