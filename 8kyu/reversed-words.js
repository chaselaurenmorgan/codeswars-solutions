// Complete the solution so that it reverses all of the words within the string passed in.



function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }




/*
Create a function that reverses all of the words within the string passed in.
Parameters - string, should not be empty can be one word
Returning the reverse of the input string 
Example "hello world!" => "world! hello", "foobar"  => "foobar"
Psuedocode 
In order to reverse the string 
1. turn into an array by using split(' '), use a space for each individual word 
2. reverse it using the reverse()
3. join it back together into a string using the join(')

*/
