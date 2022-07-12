// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function sum (numbers) {
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers.length ===0){
            return total 
        }else {
            total += numbers[i]
        }
    }
    return total
    
};

/* 
Create function that takes an array of number and return sum of the numbers. 
Parameters - intergers and empty array 
Return sum of the array and the array is empty then return 0
Example -  [] => 0, [1,2,3,-3] => 3, ([1, 5.2, 4, 0, -1] => 9.2
Psuedocode - to sum the array, can use a reduce method or a for loop 
using for loop
    1. create a variable to hold the new array 
    2. set the for loop to start at 0, and loop the length of the array, and add the counter.
    3.Within the loop add if/else statement. if number.length === 0 return total, else add numbers[i] to total variable 
*/





