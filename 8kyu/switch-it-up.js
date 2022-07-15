// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.


function switchItUp(number){
    let num = number
  
    switch(num){
      case 1:
       return 'one'
       break;
      case 2:
       return 'two'
       break;
      case 3:
       return 'three'
       break;
      case 4:
       return 'four'
       break;
     case 5:
       return 'five'
       break;
     case 6:
       return 'six'
       break;
     case 7:
       return 'seven'
       break;
      case 8:
       return 'eight'
       break;
       default: 
       return 'nine'
  
    }
  
  }

/*
Create a function tha changes the integer to it's represented number in a string 
Paramentes an interger 0-9
Return a string that outputs the integer in words
Example 1 => 'one' ,  8 => 'eight'  0 => 'zero'
Psuedocode
Requires us to use a switch statement 
*/