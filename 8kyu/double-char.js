// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
    let newStr = ''
    for(let i = 0; i < str.length; i++){
      newStr += str[i] + str[i]
    }
    return newStr
  }


  /*
  Create function that returns a string in whch each characer is repeated once 
  Parameters a string 
  Return a string with double the characters 
  Example 'abcd' => 'aabbccdd', '123' => '112233', '%^*' => '%%^^**'
  Psuedocode 
  Create an empty string variable 
  Use a for loop to loop through the string 
  add the string element to the empty variable two times 
  */