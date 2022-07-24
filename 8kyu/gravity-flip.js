// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.


const flip=(d, a)=>{
    //TODO
    return d === 'R' ? a.sort((a,b) => a-b) : a.sort((a,b) => b-a)
  }

/*
Create a function that accepts two parameters,one that will be string that accepts if 'R' or 'L' and the second paramenter will be an array of numbers.  If the parameter is = 'R' return the array in ascending order or if it is 'L' return the array in descending order
Parameters => accepts to two arguments a string 'R' or 'L' and for the second argument it takes an array 
Return => the array sorted in ascending of if the first Paramenter is = 'R' or otherwise return it in descending ordre 
Example => 
  'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
  'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
Pseudocode 
  write conditiona to see if the first argument = 'R'
  if it returns true asort the array in ascending order by using the sort method or otherwise return the array in descending order using the sore method except the swith the parameters around. 
*/

