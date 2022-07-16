// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 


String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let newStr = ''
    for(let i = 0; i < this.length; i++){
        if(this[i] === this[i].toUpperCase()){
            newStr += this[i].toLowerCase()
        }else{
            newStr += this[i].toUpperCase()
        }
    }
    return newStr
  }



/*
Create a function that changes lowercase to uppercase and uppercase to lowercase 
Parameters => ? a string 
Return => a string with alternatings case 
Example  => 'Hello World' => 'HELLO WORLD' 'HELLO WORLD' => 'hello world'
Psuedocode =>
to reference the obj use the 'this' kw 

*/