// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

function isPalindrome(line) {
    return String(line) === String(line).split('').reverse().join('')
  }

/*
Create a function that check if the input is a palindrome. 
Parameters => incluced numbers and letters 
Return => boolend if the line/word is a palidrome
Example 
  anna"   ==> true
  "walter" ==> false
  12321    ==> true
  123456   ==> false
Pseudocode 
if the line can contain number we will need to change it into string 
once we change it into a string then we can split into an array of seperate characters and then use the reverse method to change the chars around and then join the chars back together using the join method
*/