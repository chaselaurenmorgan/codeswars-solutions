// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

function findDifference(a, b) {
    //loading...
    return a.reduce((acc,c) => acc * c,1) - b.reduce((acc,c)=> acc * c, 1)
  }

  /*
  Create a function that takes into arguments that are arrays (a,b). to find the cuboids is l * w * h. find the difference between the two arrays 
  Paramenter two arguments that are arrays, each array will have 3 positve integers above 0 
  Return the difference between the two arrays 
  Example  [3, 2, 5], [1, 4, 4]) =>  14
           [9, 7, 2], [5, 2, 2]) => 106
           11, 2, 5], [1, 10, 8]) => 30
  Pseudocode 
  use a reduce method and then subrtact them 
  a.reduce((acc,c) => acc * c,1) - b.reduce((acc,c)=> acc * c, 1)
  */