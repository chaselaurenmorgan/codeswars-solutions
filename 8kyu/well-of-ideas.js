// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



function well(x){
    let ideas = x.filter(el => el === 'good').length
     if(ideas > 2){
       return 'Publish!'
     } else if(ideas >= 1){
       return 'I smell a series!'
     }else {
       return 'Fail!'
     }
   }


/*
Create a function that checks an array for good and bad ideas. If ther are one or two good ideas return publish, if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
Parameters => an array that contains 'bad' and good 
Returng a string for different test conditions 
    good >= 1  Publish 
    good > 2 I smell a series 
    no good ideas return fail 
Example =>
    ['bad', 'bad', 'bad']), 'Fail!'
    ['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
    ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] 'I smell a series!');
Pseudocode 
filter the array to only contain 'good' = by using a filter method 
create a variable to hold the the filter method 
then create an if else statement to test the conditions 
*/

