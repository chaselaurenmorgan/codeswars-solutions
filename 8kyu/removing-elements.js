// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    //your code here
    return arr.filter((el,index) => index % 2 === 0)
  }

/*
Remove every second element from an array. 
Paramenters an array that will not be empty 
return an array with evey other element 
Example => ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
Psuedocode 
To remove elements from an array, use the filter method 
to access every other index use make sure to index as paramter in the function 
test condition to use  index % 2 !== 0 
*/