// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.7778)
  }


/*
Create a function that takes the speed in km per hours and returns it in cm per second, and round it down to the integer. 
Parameters is a integer that is the speed in km per hours 
Returning an interger that converts km per hour to cm per second rounded down to the nearest integer 
Example =>  1.08 => 30 , 1.09 => 30, 0 =>0
Psuedocode 
convert the input of s to cm per sec. 
s * 30 
rounding it down to the nearest integer by using Math.floor 
Math.floor(s * 30)
*/