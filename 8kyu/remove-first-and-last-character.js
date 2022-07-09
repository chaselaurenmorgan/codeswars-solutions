// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(0,str.length-1)


   };
   



/*
Prep + Parameters 
Removing the first and last character from a string 
Parameters -string, more than two characters 
Returning - string with the first and last character removed 
Example  - 
    'chase' = 'has'
    'person' = 'erso'
    'place' = 'lac'
Psuedoecode  - 
    string method slice where i remove the first char at index 1 and the last index str.length -1 / or just -1
    for loop where i start intializer at 1 and run the loop up untill str.length -1 


*/