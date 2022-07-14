// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
        return parseInt(inputString)
    }


/*
Create a function returns the girl's age as integer 
Paramenters is string where the first character in the string will always be a number 
Return a single interger that represents the girl age 
Example "1 year old" => 1, "5 years old" => 5 "9 years old" => 9
Psuedocode 
get the the number by using parseInt since it is at the beginning of the string or
we grab the first element of the string and convert it to a number => +inputString[0]
*/
