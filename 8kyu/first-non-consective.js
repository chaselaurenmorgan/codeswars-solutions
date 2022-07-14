// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
    for(let i = 1; i < arr.length; i++){
          if(arr[i] !== arr[i-1] +1){
              return arr[i]
          }
      }
      return null
  }

/*
Create a function that returns the first non consecutive number 
Parameters an array with numbers and with a length of at least two. 
Return the first non consecutive number in the array, if the the whole array is consecutive return array 
example [1,2,3,4,6,7,8] =>  6  [-1,0 ,2,3,4] => 2 
Psuedocode  - 
create a for loop to iterate through the array.
within that array create an if statement that test the condition of the following 
if the current element arr[i] is not equal to the previous number + 1 arr[i-1] + 1
then return the current element otherwise return null 

*/