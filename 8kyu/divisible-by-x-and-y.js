// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n,x,y){
    return n % x === 0 && n % y === 0 ? true : false
}





/*
Creating a function that checks if (n) number if divisible by two numbers x and an y 
Parameters three , numbers that are positive and non zero 
Returning a booleen that indicates if n is divsible by both x and y 
Example n =   3, x = 1, y = 3 =>  true
n =  12, x = 2, y = 6 =>  true
n =  12, x = 7, y = 5 
Psuedocode. 
1. use ternary operator 
2. n % x === 0 && n % y === 0 
3. return true or false 


*/