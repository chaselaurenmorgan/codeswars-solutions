// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


function litres(time) {
    return Math.floor(time * .5)
  }







/*
Nathan drinks .5 liters of water per hour. Given the time in hours and need to return the number of litres Nathan wil need to drink,rounded to the smallest number.

Parameters will be a number that represent the hours Nathan is cycling 
Returning the number of liters Natan will need  per the hour rounded down to the smallest integer 
Example  3 => 3*.5 => 1.5 =>1
Psudocode - 
  take the time and multiply by .5 and then round down using Math.floor.
*/