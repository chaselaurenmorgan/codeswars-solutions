// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }

/*
Create a funtion that calculates how many years ago the father was twice as old as his son or in how many years will he be twice as old 
Parameters are two arguments father age in yrs which will be a number and son age in years will be number 
Return a number that represents how many years ago or how many years will the father be twice as old as the son 
Example 36, 7 => 36 (2 *7) 14 => 22 , 
        55, 30 => 55 - 60 => -5   remove negative 
Psuedocode 
multiply the son's age by two and subtract it by the dad's age. In order to get rid of the negative we can use Math absolute

*/