// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
  }


/*
Create a function to check if a word is a palidrome(if the word is read the same backwards )
Parameters => a string that can be capital letters or lower case 
Return a boolean to determine if the word is a palindrome 
Example 
        ("a"), true
        Abba"), true
        "hello"), false
Pseudocode 
change the string to one casing x.toLowerCase()
and then change it to an array to reverse it  x.toLowerCase().split('').reverse()
and then join it back together to a string 
*/