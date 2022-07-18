// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    let catYears = 0
    let dogYears = 0 

    if(humanYears == 1 ){
        
        catYears += 15
        dogYears += 15
    }else if(humanYears === 2){
        
        catYears += 24
        dogYears += 24
    }else {
        
        catYears += (humanYears -2 ) * 4 + 24
        dogYears += (humanYears -2 ) * 5 + 24
    }

    return [humanYears,catYears,dogYears];
  }

/*
Create a function that returns the respective ages of humanYears,catYears,dogYears
Paramenters will be 1 input that is a number 
Returning an array of humanYears,catYears,dogYears which will contain 3 elements and all three will be numbers 
Example 
(1) => [1,15,15]
(2) => [2,24,24]
(10) => [10,56,64]
Pseudocode 
create three empty variables 
let humanYears2 
catYears
dogYears

three test conditions 
humanYears ===1 
humanYears2 += humanYears
catYears += 15 
dogYears += 15 

humanYears === 2 
humanYears2 += humanYears
catYears += 15 + 9 
dogYears += 15  + 9 

else 

humanYears2 += humanYears
catYears += (humanYears -2 ) * 4 + 24         56 = 24 + 32    minus the two yrs  
catYears += (humanYears -2 ) * 5 + 24 
*/