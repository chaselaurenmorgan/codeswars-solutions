// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    //your code here
    let arr = []
    for(let i = integer; i < limit; i+= integer){
        arr.push(i)
    }
    return arr
  }

/*
Create a function that take two numbers  and return the multiple in an array. Try to write it one line 
Paramenters => two arguments both number that will always be positive and greater than zero
Return =>  an array with contains the multiple  of the integer up untill the limit 
Example 
  (5, 25), [5, 10, 15, 20, 25]
  (1, 2), [1, 2]
  (5, 7), [5]
Pseudocode 
  create an empty array  let arr = []
  creeat a for loop to loop through the limit 
  for(let i = integer; i < limit; i+=limit){
    arr.push(i)
  }
  return arr
*/