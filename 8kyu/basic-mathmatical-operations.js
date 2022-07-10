// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


function basicOp(operation, value1, value2){
  // Code
  if(operation === '+'){
    return value1 + value2
  }else if(operation === '-' ){
    return value1 - value2
  }else if(operation === '*'){
    return value1 * value2
  }else {
    return value1 / value2
  }
}







/*
Creating a function that does 4 mathmatical operation (-,+,/,*) and return the result of the number after applying the chosen mathmatical operaton 

Parameters are three arguments - operation which is a string , interger, interger 
Returning the a number which is the result of the two integers and the operartion 
Example +, 1,1 => 3 , -,15,18 => -3, 
Psuedocode - we can solve this with an if/else or switch case  





*/