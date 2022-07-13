// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.


const areaOrPerimeter = function(l , w) {
    // Return your answer
    return l === w ? l * w : (l+w) * 2
  };



/*
Create function thate compares to arguments that are length and width. If the two arguments are square returns is area otherwise return it's perimeter 
Parameters two arguments of length and width, will be non negative numbers 
Returning the area if the test condition is a square  or returning perimeter if otherwise 
Example 4,4  4===4 => 16 5,2 => (5+2)*2 => 14 
Psuedocode 
teneray operator for test condition of l ===w ? l * w : (l + w)*2
*/