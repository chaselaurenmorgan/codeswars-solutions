// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.



function otherAngle(a, b) {
    return 180 - (a + b)
  }


/*
Create a function with two argument of an interio angles and return the third.
Parameters two arguments, positve integers, representing the degrees of the triangle 
Returning the third angle, integer 
Example 30,60 => 90, 60,60 =>90 10,20 => 150
Psuedocode 
total degrees of triangle = 180 
math to get the third angle 180 - a + b 
*/