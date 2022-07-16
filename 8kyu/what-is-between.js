// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    // your code here
    let newArr =[]
    for(let i = a ; i <= b; i++){
        newArr.push(i)
    }
    return newArr
}


/*
Create a function that takes in two parameters of a and b. a <b, and return an array of all integers btwn the input parameters, including them 
Parameters will be a and b. Will be integers and a < b 
Returning an array that contains a ... middle integers... b 
Example 
    1,4 => [1,2,3,4]
    -2,2 => [-2,-1,0,1,2]
    5, 10 => [5,6,7,8,9,10]
Pseudocode 
    create an empty variable that contains an empty array 
    let newArr =[]
    for loop that starts at a and loops the amount of times = b 
    for(let i = a; i <= b; i++)
    in the code block push i into the empty array 
    newArr.push(i)
    then return the newArr
*/


