// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".



function problem(x){
    //your code here
    return typeof x === 'number' ? x * 50 + 6 : 'Error'
  }


/*
Parameters will a string or a number. The number can be integer or decimal and the string can be empty 
Return if the parameter is a number then we will multiply it by 50 and add 6. If it is a string we wiil return the string of 'Error'
Example
  'hello' => 'Error'
  10 => 10 * 50 + 6 => 506 
  0 => 0 * 50 + 6 => 6 
  '' => 'Error'
Pseudocode 
Need to determine if the parameter is a number 
We can use the typeof operator to see if the parameter is === to a number 
if it the parameter is === to a number then we multiply the parameter by 50 and add 6 
if it is not a number we will return the string of 'Error'
*/