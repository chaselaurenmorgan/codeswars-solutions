// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). 

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
}

/*
Create a function that recieves two parameters, employed and vaction, which will both be boolean.  employed will be true if you are employed  and vacation will be true if you are on vacation.  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). 

Parameters - two arguments employed, vacation which both be boolean 
Return a boolean of true if employed = true and vacation = false, else return false 
Example - true, true => false , false,true => false  true,false =true
Psuedocode - test condition in a ternary operator 
employed === true && vacation === false ? true : false 
*/
