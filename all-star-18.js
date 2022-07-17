// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.


function strCount(str, letter){  
    //code here
    return str.split('').filter(char => char === letter).length
  }


/*
Parameters => are two arguments, 'str' => string or empty string   'letter' => a string with the length >= 1 
Return a number that shows how many time the letter occurs in the string, if there is no occurence return 0 
Example 
 ('Hello', 'o') =>1);
 ('Hello', 'l') => 2);
 ('', 'z') =>0)
Pseudocode 
evaluate/iterate through character of the string 
for loop or either converting to a array 
to convert to an array, split() => str.split('') => ['H','e','l','l','o']
filter out the letter that do not match the argument of leter with the filter method 
str.split('').filter(char => char === letter)  => ['o']
to get the the count of the array we can use the length property => str.split('').filter(char => char === letter).length
*/