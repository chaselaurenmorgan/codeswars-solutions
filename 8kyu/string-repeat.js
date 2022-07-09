//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n,s){
    let newStr = ''
    for(let i = 1 ; i <= n ; ++i){
        newStr += s
    }
    return newStr
}
ß




/*
Prep + write 
P - Paramenters 
Passing in integers(only positive) and strings with any characters 
R - Return
a string that is repeated n times from our parameters 
E -  Example 
h,5 => hhhhh
Hello, 3 => HelloHelloHello
**,4 => ********
Psuedocode 
Loop in this function x number of times from our parameter 




*/