// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     return arr1 + arr2; //something went wrong
//   }
  function arrayPlusArray(arr1, arr2) {
    let arr3 = [...arr1,...arr2]
    return arr3.reduce((acc,c)=> acc + c,0)
  }


/*
Debugging and adding two arrays together 
Paramaters two arrays will be only intergers 
Returning the sum of the both of arrays 
Example [1, 2, 3], [4, 5, 6]) => 21
        [-1, -2, -3], [-4, -5, -6] => -21
        [0, 0, 0], [4, 5, 6]) => 15)
Psuedocode 

*/