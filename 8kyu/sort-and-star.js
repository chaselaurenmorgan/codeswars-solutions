// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.



function twoSort(s) {
    return s.sort()[0].split('').join('***')
}


/*
Create a function the sorts alphabetically (ASCII Values) and return the first value. The returned value must be  a string and have "***" between each of its letters.
Paramenters => given an array of words 
Return => the first value of the array sorted alphabetically as a string with the "***" between each of its letters.
Example  => 
    ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' 
    ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
Psuedocode 
use an array method to sort array in ascending order  - sort method 
s.sort()[0] => sorts it in alphabetical order and keeps the first index  and changes it into a string 
next we need to split each letter and turn back into an array so that we can join it with join method + ***
s.sort()[0].split('').join('***')
*/

