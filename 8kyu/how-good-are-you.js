// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    return classPoints.reduce((acc,c)=> acc + c,0)/classPoints.length < yourPoints
  }


/*
Create function that takes the average of an array (classPoints) and compares it to your points. Return true if your score better than the classpoint otherwise return false. YourPoints are not included but need to add the points to the given array y
Parameters are classpoints which is an array with numbers, and the other input is yourpoints which is also whole numbers 
Returning a boolean, of the average of the classPoints + yourPoints and comparing against yourPoints input to see which is the higher score.
Example [2, 3] =>  5, true  [100, 40, 34, 57, 29, 72, 57, 88] => 75) true
Psuedocode 
1. sum up the elements in array to a single value using reduce 
    classPoints.reduce((acc,c)=>acc + c,0)
2. find the average of the class points by dividing the sum of the array by the length of the array 
    classPoints.reduce((acc,c)=>acc + c,0)/classPoints.length
3. To check if yourPoints is greater than the avg of the classPoints we can use the greater than operator 
    classPoints.reduce((acc,c)=>acc + c,0)/classPoints.length < yourPoints

*/
