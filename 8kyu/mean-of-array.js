// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.ceil(marks.reduce((acc ,c )=> acc + c,0)/marks.length)
  }


  /*
  Create a function that returns the average of the given array rounded down to its nearest integer. 
  Parameter an array with the numbers 
  Returning a single value of the average of the array rounded down 
  Example [2,2,2,2] => 2, [1,2,3,4,5,] =>
  Psuedocode to find the average of the array reduce the array down to the sum and divide it by the length of the array. To round it down to the nearest integer use the Math.floor
  */
