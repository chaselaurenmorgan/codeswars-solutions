// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let area = 2*(depth*width + depth*height + width*height) 
    let volume = width * height * depth 
    
    return [area,volume]
    
  }
  

/*
Parameters takes three inputs width,height, and depth. all three inputs will and input and will not be empty 
Return an array with the area calcutation in index 0 on the array and calculation of the volume 
Example 
    (4, 2, 6), [88, 48]
    (10, 10, 10), [600, 1000]
Pseudocode 
create a new array using the Array.from() method 
get the calculation of the area 
surface area = 2*(d*w + d*h + w*h) 
for the surface area  width = w , height = h, depth = length 
2(4*6, + 6*2, 4*2) => 2(24 + 12 + 8) => 2(44) => 88
and the volume equation 
width * height * depth


*/