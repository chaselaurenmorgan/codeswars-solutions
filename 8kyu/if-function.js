// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

function _if(bool, func1, func2) {
    // ...
    return bool ? func1(): func2()
  }


/*
Create a function that takes in 3 parameters. parameter 1 => boolean value  parameter 2 => function  paramenter 3 => function 
when the boolean is truen the the function one should be called else the function 2 will be called. function 1 and function 2 do not take any parameters.  function 1 should console.log('True') and function 2 should console.log('false)
Parameters => three.  a boolean (true/false) and 2 functions(no parameters)
Return true or false to the console log
Example 
  _if(true, function(){console.log("True")}, function(){console.log("false")})
Pseudocode 
if the bool is true call the func1() else call func2()
*/