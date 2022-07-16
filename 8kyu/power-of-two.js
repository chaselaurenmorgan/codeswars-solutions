//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let newArr =[]
    for(let i = 0; i <= n; i++){
      newArr.push(2 ** i)
    }
    return newArr
}


/*
Create a function that take a number as an input and return a list of all the powerts of 2 ranging from 0 to n 
Parameter is one argument, number non negative 
Returninga an array that list all of power of 2 from 0 to and including the input n
Example 
0 => [1]
1 =>, [1, 2]
4) => [1, 2, 4, 8, 16
Psueudocode 
create an empty array variable 
for loop and run it to and including 'n'
push into the empty variable 2 **1 
and return the newArr
*/