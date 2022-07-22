// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
  }


/*
Create a function that swaps the words in a string 
Parameters a string that conatains firstname and lastname 
Returning the lastname first and the first name last in a string 
Example => 'chase morgan' => 'morgan chase '
Pseudocode 
  to reverse the string it needs to be an array in order to use the reverse method 
  str.split(' ') => ['chase', 'morgan']
  use the reverse method to swap the elements in the array 
  str.split(' ').reverse() => ['morgan', 'chase']
  to return it back to a string use the join method with some space 
  str.split(' ').reverse().join(' ')  => 'morgan chase'
*/