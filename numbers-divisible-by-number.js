// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.





function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
  }



/*
Create a function that takes two arguments and return all the numbers that are divisible by the given divisor.
Paramenters two arguments 'numbers' and 'divisor',  numbers will be an array with intergers and divisor will a integer 
Return and array of the numbers that are divisible by the divisor 
Example 
  [1,2,3,4,5,6], 2) => [2,4,6]
  [1,3,5], 2) => []
  [0,1,2,3,4,5,6], 4) =>[0,4]
Pseudocode 
since this is an array we can use an array method 
we want to keep the numbers that are divisible by the divisor  => filter()
filter out all of the numbers that are not divisible by the divisor 
numbers.filter(filter => num % divisor === 0)
*/