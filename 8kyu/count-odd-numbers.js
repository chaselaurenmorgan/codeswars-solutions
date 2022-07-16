// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
    // your code here
    Math.floor(n/2)
  }

/*
Create a function that has an input of a number, return the number of positive odd number below the the argument 
Parameters will one argument that is number 
Return a single value that is the total of the positve odd numbers 
Example 3 =>(1) 1  , 7 =>(1,3,5) 3, 9 => (1,3,5,7) 4
Psuedocode 
create an empty variable to hold the total count of the pos odd numbers 
for loop that loop around n times 
on each loop, add odd number to the empty variable with an if/else statuem 
if(i !==0){
    str ++

}
can't use the above method b/c it will time out. Alternatively use Math.floor(n/2)
*/