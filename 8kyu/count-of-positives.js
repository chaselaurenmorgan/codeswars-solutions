// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if(input === null || input.length ===0){
        return []
    }

    let positiveArray = 0
    let negativeArray = 0

    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            positiveArray++
        }else{
            negativeArray += input[i]
        }
    }
    return [positiveArray,negativeArray]
}



/*
Creating function that returns an array where the first element is count of the positive numbers and the second element is sum of the negative numbers. If the input is an empty array or or is null return an empty array 

Paramenters wil be numbers, negative and positve, and empty arrays and null 

Returning an array with the first element with a count of the positive numbers and the second element will be a sum of the negative numbers and if the array is null or empty returning back an empty array 

Example would be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

Psuedocode 
1. first create an if statement that will return and empty array if the array is empty of or null
2. create 2 empty variable to store the positive and negative number 
3. create a for loop with an if/else statement to push positive and negative numbers into their associated data 
4. return in it array [pos,neg]


*/



