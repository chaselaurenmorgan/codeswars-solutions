// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


function remove (string) {
    //coding and coding....
    return string.endsWith('!') ? string.slice(0,-1) : string 
  }


/*
Parameters => will be a string that might have one or more ! or none 
Return  => string without the ! at the end of the string 
Example 
  'Hi!' => 'Hi'
  'Hi!!!' =>'Hi!!'
  'Hi' => 'Hi'
Pseudcode 
Need to access the end of the string and test if it is === ! 
string.endsWith('!') then we need to remove the ! from the end of the string 
how can remove the end of a string? we can use the slice method 

string.endsWith('!') ? string.slice(0,-1) : string 
*/


