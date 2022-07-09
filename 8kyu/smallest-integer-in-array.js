//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


/*
In the array we need return the smallest integers 
Parameters  - will be array of Integers 
Return - returning the smallest integer from the array 
Example - 
    [78,56,232,12,8] => 8
    [78,56,232,12,18] => 12
    [78,56,232,12,0] => 0
Psudocode 
Math obj to return the smallest integer such as Math.min 
and we would spread the array inside of the Math.min 


*/