// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.


var min = function(list){
    
    return Math.min(...list);
}
  
var max = function(list){
    
    return Math.max(...list);
}
  


/*
Creating two function that recieves a list of integers as input, anf returns the largest and lowest number in that lise
Parameters  - is number in that list negative and positve 
Example  - [42, 54, 65, 87, 0]) => min 0, max 0
Returning the min number for the min functiion and returning a max number for the max function 
Psuedocode 
- use the Math.min and spread the array inside of it and do the samething for the max function using Math.max



*/