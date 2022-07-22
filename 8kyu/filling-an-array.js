// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


const arr = N => {
    let arr = []
    for(let i =0 ; i < N ; i++){
        arr.push(i)
    }
    return arr
}


/*
create a function that creates an array with number of 0 to the input in it 
Parameters will be a number or it can be empty 
Returning an array with the number counting to the input 
Example  4 => [0,1,2,3]
         => []
Pseudocode 
    create an empty array to push the numbers into => let arr =[]
    to get the numbers create a loop that starts at 0 and with a test cond going to the input number 
    for(let i = 0; i < n; i++){

    }
    within the code block we will push the i (the count of numbers) into the empty array 
    arr.push(i)
    then we will return the arr 
*/