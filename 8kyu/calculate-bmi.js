// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
   let bmi = weight / Math.pow(height,2)
    if(bmi <= 18.5 ){
        return 'Underweight'
    }else if(bmi <= 25){
        return 'Normal'
    }else if(bmi <= 30.0 ){
        return 'Overweight'
    }else {
        return 'Obese'
    }
  }



/*
Create a function that calculates the body mass index (bmi = weight / height2)
Parameters  - weight and height, which whole numbers or floating numbers 
Returning the weight/height squared  if the total is less then 18.5 return "Underweight" and if the total is  <= 25.0 return "Normal" , if the total is if bmi <= 30.0 return "Overweight" and if the total is greater than 30 return "Obese"
Example (80, 1.80) => "Normal"
Psuedocode 
1. create a variable name bmi = weight/Math.pow(height,2)
2. create an if else statement 

*/



