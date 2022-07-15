// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).


function solution(a, b){
    // your code here
    return a.length < b.length ? a + b + a : b + a + b
  }

  
/*
Create a function that returns a strings from the inputs, with the shorter sting on the outside and longer string on the inside. The strings will not be the same length but there may empty strings 

Parameters - two arguments that will be a string, will not be the same length but might be empty 
Returning a string with the shorter string on the outside, front and back, and the longer string in the middle
Example 'U', 'False' => 'UFalseU',  '123','' = > ' 123 ' 'soon','me' => 'mesoonme'
Psuedocode 
Use ternary  operator 
if a.length < b.length => str += a[i] + b[i] + a[i] else return str += b[i] + a[i] + b[i]
*/