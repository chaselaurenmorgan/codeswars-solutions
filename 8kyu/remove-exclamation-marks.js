// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    let newStr= ''
    for(let i = 0; i < s.length; i++){
        if(s[i]!== '!'){
            newStr += s[i]
        }
    }
    return newStr
  }



/*
Create a function that removes all exclamation marks from a given string 
Parameter a string with exclamtion mark 
Return a string with no exclamation marks 
Example "Hello World!" => "Hello World"
Psudocode 
For loop that test conditoin s[i] !== '!'
*/