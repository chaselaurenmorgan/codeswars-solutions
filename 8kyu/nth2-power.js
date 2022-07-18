// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.


function index(array, n){
    //your code here
    return array[n] **n || -1 
  }





 /*
Create a function that is given an array with positive number and an a non negative number. Find the N-th power of the element in the array with index of N. If N is outside of the array then return -1.
Parameters - two, an array of only positive numbers and n which will be non negative numbers 
Returning  a single value of the array to nth power of N, and if N is not in the array then return -1 
Example - 
 array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
 array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
Pseudocode. 
return the array with the n 
array[n]
multiply it to the nth power 
array[n] ** n 
or return -1 if n is not in the array 
array[n] ** n || -1 

*/