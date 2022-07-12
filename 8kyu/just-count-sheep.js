// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    //your code here
    let countSheep = ''
    for(let i = 1; i <= num; i++){
        countSheep += `${i} sheep...`
    }
    return countSheep
  }




/*
Create a function that counts sheeps the input will alwasy be positve but input might be zero

Params will be a number positive and zero
Return an empty a string if num === 0 and return a string counting up to the input number "1 sheep...2 sheep...3 sheep..."
Example 1 => "1 sheep...", 3 => "1 sheep...2 sheep...3 sheep..."
Psuedocode 
1. create an empty string variable to hold the new string 
2. use a for loop to count to the input 


*/