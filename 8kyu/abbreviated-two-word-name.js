// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.


function abbrevName(name){

    return name.toUpperCase().split(' ').map(name => name[0]).join('.')

}


/*
write function that converts two words with spaces and convert into intials 
Parameters is string with that contains two words with a space in between 
Returning a new string with the first letter of the first word followed by a period and the second word followed by period. There will be lowercase 
Example 'Chase Morgan' => C.M.,  'Raymond Harris' => 'R.H.'
Psuedocode - 
    1. capitalize letters with toUppercase()
    2. change the string into an array using split(' ') => ['Raymond','Harris']
    3. change or map over this array to only show the first letter of each  word. 
        use map() to grb the first index of each letter 
    4. change back to a string and a period with the join method 

*/
