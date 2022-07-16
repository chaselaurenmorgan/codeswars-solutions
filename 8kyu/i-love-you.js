// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


function howMuchILoveYou(nbPetals) {
    // your code
  let number = nbPetals % 6 
  
    if(number === 1){
        return 'I love you'
    }else if(number === 2){
        return 'a little'
    }else if(number === 3){
        return 'a lot'
    }else if(number === 4){
        return 'passionately'
    }else if(number === 5){
        return 'madly'
    }else {
        return 'not at all'
    }
}


/*
Create a function to determine which phrase would be said for a flower of given number of petals, where nb_petals >0 
Parameters is one argument that takes in a number 
Returning a 'string' that goes with the number 
Example 
7 => I love you
3 => a lot
6 => not at all
Pseudocode 
Each  number goes with each phrase 
1  I love you         7
2  a little           8
3  a lot              9
4  passionately
5  madly
6 not at all
create a variable that will take the input and divide it by the number of phrases and use the remainer as the test condition
use an if/else to test for the the different number 

*/

