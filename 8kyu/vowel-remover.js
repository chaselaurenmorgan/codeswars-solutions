// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    function shortcut (string) {
        let str = ''
        for(let i =0 ; i < string.length; i++){
          if(string[i] !== 'a'&&
             string[i] !== 'e'&&
             string[i] !== 'i'&&
             string[i] !== 'o'&&
             string[i] !== 'u'){
             str += string[i]
             }
        }
        return str
      }
  }

/*
Create a function that removes the lowercase vowels in a given string 
Parameters => a string that will have vowels 
Return => the string with outh the lowercase vowels and if uppercase vowels then return those with the original string 
Example => 
  "hello"     -->  "hll"
  "codewars"  -->  "cdwrs"
  "goodbye"   -->  "gdby"
  "HELLO"     -->  "HELLO"
Pseudocode 
  create an empty string variable to hold the new string 
  use a for loop to go through each char of the string to see if the string char matches a lowercase vowel
*/