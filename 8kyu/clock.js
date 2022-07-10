// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.



function past(h,m,s){
    let hoursMs = 3600000
    let minutesMs = 60000
    let secondsMs = 1000
    return (h * hoursMs) + (m * minutesMs) + (s * secondsMs)

}






/*
Create a function that returns time in milliseconds 
Paramenters three -  hours, mins, secs , wil it always be 0 and 1
Return single number in milliseconds 
Example 
h = 0
m = 1
s = 1
result = 61000
Psuedocode 
1. convert h, m, s into milliseconds 
    1 sec = 1000ms 
    1 min = 60000ms
    1 hour = 3600000ms
2. Multiply the parameters to each


*/