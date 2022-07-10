//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.



var summation = function (num) {
    
    let sum = 0
    
    for(let i = 1; i <= num; i++){
     sum += i
    }
    return sum 


  }




  /*
Creating a functions that sums every number from 1 to to the paramenter 
Parameter - is a number that is positvie and greater than 1 
Return - a number that is a sum of the parameter, in a single value 
Example - 2 => 1 + 2 = 3 
         8 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 
Psuedocode - 
  we need to add a  varaible to store all of the numbers 
  and loop it back into the number - for loop 

  */