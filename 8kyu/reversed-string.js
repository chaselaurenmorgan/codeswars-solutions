//Complete the solution so that it reverses the string passed into it.

function solution(str){
  
    let newStr = ''
    for (let i = str.length-1 ; i >= 0; i--){
        newStr += s[i]
    }
    return newStr
}




/*
Prep + Write 
Taking a string and reversing it 
P- Paramenter 
string, the string can be empty, one letter 
R- Return 
returning the string in reverse order 
E - Example 
'world' => 'dlrow
'' => ''
'h' => 'h'
P - Psuedocode 
string methods  - split into array and then reverse it and then join it back 
for loop  - looping it into a new string reversed 

*/



