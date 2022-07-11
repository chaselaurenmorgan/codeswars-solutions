// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.



function paperwork(n,m){
    return n < 0 || m < 0 ? 0 : n * m
}




/*
Create a function that calculates how many blank pages do you need. If n <0 or m < 0 return 0
Parameters - are two inputs n => classmates and m=> pages. Numbers can be negative or postive 
Returning the amount of blank pages needed in a number 
Example 5,5 => 25, 0,0 => 0  5,0 => 0   



*/