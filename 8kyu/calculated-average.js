// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.


function find_average(array) {
    // your code here
   return array.length !== 0 ? array.reduce((acc,c) =>acc + c, 0)/array.length : 0
  }



/*
Create a function that calculates the average of the number in a given list, empty arrays should return 0
Paramenter - array of numbers, whole, empty array 
Return - the average of the array and 0 if the array is empty 
Example [1,1,1] => 3, [1,2,3] => 2
Psuedocode
use the reduce method and then divide it by array.lenth 
*/