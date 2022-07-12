// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump <= mpg * fuelLeft
  };



/*
Create a function that tell you if it possible to get to the pump or not.
Parameters, are three iputs. distanceToPump which will be a whole number, mpg another whole number, and fuelLeft another number 
Returning a boolean to tell if you will make it to the pump 
Example 50,25,2 => true , 100,50, 1 => false 
Psuedocode 
mpg * fuelLeft >= distanceToPump

*/