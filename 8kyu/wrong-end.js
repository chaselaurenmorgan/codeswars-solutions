// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!


function fixTheMeerkat(arr) {
    //your code here 
    let newArr =[]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[0]){
            newArr.push(arr[2],arr[1],arr[0])
        }
    }
    return newArr
   }



/*
Create a function that take an array and arrange the array by changing the element positions
Parameters is an array of strings, with 3 elements 
Returning the rearrange array with the same amount of strings 
Example - ["tail", "body", "head"]) => ["head", "body", "tail"],  
   ["bottom", "middle", "top"]) =>  ["top", "middle", "bottom"]
   (["ground", "rainbow", "sky"]) => ["sky", "rainbow", "ground"])

Pseudocode 
in the example the head and the tail are switched up but body remains in the middle 
in the array that has an a length of three, we need to swap index 0 and index 2 
for loop 
create an empty array => newArr[]
use for loop that will run the length of the arr => for(let i = 0; arr.length; i++)
test condition arr[i] === 0  then add the arr[2] + arr[1] + arr[0] to the empty array 
*/