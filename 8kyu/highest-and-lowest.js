// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.



function sumArray(array) {
   if(array){
    return array.sort((a,b) => a-b)
                .slice(1,-1)
                .reduce((acc,c) => acc + c)
   }else {
    return 0
   }


}


/*
Create a function the sums all of the numbers of a given array extept the higest and lowest number by value. The highest will remain at the beginning and the lowest towards the end. 

Paramaters will be an array of numbers, empty, and null 
Return if the array is null,empty, or has one element return  0, otherwise return the sum of array except for the highest and number in the array 
Example  null => 0, [] => 0 [1,2] => 0 [ 6, 2, 1, 8, 10 ] => 16
Psudocode 
use the truthy array as a test condition to remove the false conditions of undefined,null, NAN, 0, and empty 
if(array) <= truthy 
return array.sort((a,b)=> a-b) to sort 
            .slice(1,-1) <= remove the the beginning and the end of the array 
            .reduce((acc,c)=> acc + c,0) <= to sum it down to a single value
*/