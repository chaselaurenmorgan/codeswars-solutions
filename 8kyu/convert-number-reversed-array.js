// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    
    return String(n).split('').map(Number).reverse()

  }


  /*
Create function of numbers and returning the digits withing an array in reverse order 
Parameters is a number, that non negatinve 
Returning an array with of the numbers that are in reversed order 
Example 348597 => [7,9,5,8,4,3], 0 => [0]
Psuedocode - need to convert the numbers to an array. 
        - First convert into a string - to string(), Sting()
        - then change into an array - split() 
        - then change the array of strings into a number iteration - map 
        - then reverse it 

  */


