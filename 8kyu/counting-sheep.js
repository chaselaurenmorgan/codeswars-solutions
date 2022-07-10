// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {

    return arrayOfSheep.filter(sheep => sheep === true).length
  }




/*
Given an array of sheep where the sheep will be missing, indicated by false, create a function that counts the number of sheep in the array 

Parameter is an array that contains true, false, undefined, and null 
Returning - a single value of how many true aka sheeps are in the array 
Example - [true,false,true] => 2 
        [null,undefine,true] => 1 
Psuedocode - to count how many sheep are the in array we can use .length and then to remove the false, undefine, or null we can use a filter method 
we can use a for loop and if/else statement to count if the element does not 



*/
