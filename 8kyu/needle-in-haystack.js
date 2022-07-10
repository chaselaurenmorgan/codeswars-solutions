// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found t

    function findNeedle(haystack){
        let number = haystack.indexOf('needle')
        return `found the needle at position ${number}`
    }


/*
In an array find the element that contains needle, after you find the need return the message 'found the needle at position _'
Parameters given array with strings, numbers, undefined, null, and booleans . Needle will only listed once in the array 
Returning string that states where the positon of the 'needle' is found. In this phrase  'found the needle at position _'
Example  ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false] => 'found the needle at position 3'
Psuedocode.  
    1. declare a variable that we set equal to indexOf 'needle'
    2.insert the variable into a temperal literal 
*/  


