// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let newArr =[]
    for(let i = numbers[0]; i < numbers[numbers.length-1]; i++){
        newArr.push(i)
    }
    return newArr
}


/*
Create a function that takes a list of numbers that returns a fixed list where the increment by for each index from min value up to the max 
Parameters => an array of number that might be sorted if not will have to sort it 
Returning an array where the value increments by 1 from the min to the max 
Example 
    Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
Pseudocode 
    create an empty array variable to push the numbers in 
    create a for loop that start/initializes at the min number and loops to the max number 
    for(let i = numbers[0]; i < numbers[numbers.length-1]; i++)
    in the code block add the i in the new array 
*/