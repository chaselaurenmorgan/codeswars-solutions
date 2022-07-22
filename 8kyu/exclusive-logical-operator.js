// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.


function xor(a, b) {
    // TODO: Program Me
    return a !== b 
  }


/*
Create a function that where a and b are evalutatied if one of the expression is true return true and if they are both true or if they are both false return false 
Parameters => two parameters which will either be true or fale 
Return => boolean 
Example =>  
    false, false), false
    true, false), true,
    true, true), false
Psuedocode 
a and b  cannot both equal true or false at the same time 
a !== b ? true : false 
*/