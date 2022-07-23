// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step){
    let arr = []
    for(let i = min; i <= max; i+=step){
       arr.push(i)
    }
    return arr
  }

/*
Create a function that generates an array from three arguments,min, max, step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Parameters three arguments min max and step(between  the min and the max)
Returning and array with the min at the beginning of the array and the max at the end of the array and inbetween the min and the max the count 
Example 
    (2, 10, 2) // should return array of [2,4,6,8,10]
    (1, 10, 3) // should return array of [1,4,7,10]
Pseudocode 
    create an empty array to push the min steps and max let arr = []
    create a variable for both the min and the max 
    to get the steps we can use a for loop 
    initializer start at the min and loop it up until the max 
    for(let i = min; i < max; i+=step){
        if(i > max){
            arr.push(i)
        }
        return arr.unshift(min).push(max)
    }

*/