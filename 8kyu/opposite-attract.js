// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
    // moment of truth
    return flower1 % 2 !== flower2 % 2
  }






/*
Create a function will take the number of petals of each flower and return true if they are in love and false if they are not 
Parameters two numbers, non negative and whole and 0
Returning a boolean if flower 1 === positive and flower 2 === negative  return true (same for the opposit) and if flower 1 and flower 2 both equal true return fals 
Example 2, 4 => false  1,4 => true   0,0 => false 
Psuedocode 
how do we determine if a number is positve or negative - with % 2 === 0 
in this example take the if flower 1 and flower 2 === each other than it should be false 
*/