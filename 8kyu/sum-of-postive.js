//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let positiveNum = 0 
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        positiveNum += arr[i]
      }else {
        positiveNum += 0
      }
    }
    return positiveNum
}




/*
Prep + Write 
An array of numbers and return only the sum of the positve ones 
P - Paraments 
Array of Numbers, -Negative and Positive Numbers, and Empty Array 
R - Return 
Only returning the sum of all of the positves one and if the array is empty return 0 and negative number = 0 
E - Example 
[1,2,3,4,5] => 15 
[] => 0
[1,-2,3,4,5] => 13 
P - Psuedoecode 
for loop 


*/