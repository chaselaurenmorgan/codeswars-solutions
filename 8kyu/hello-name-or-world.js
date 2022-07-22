// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


function hello(name = 'World') {
    return `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!`
  }


/*
Create a method the return 'Hello World' if the name is not given or an empty string pass world. Also  return the name with a capital letter.

Parameters => takes in a string  name and it can be empty 
Return => string with  of Hello + name with the first letter capitlized 
Example => `name` = "john"  => return "Hello, John!"
            "aliCE" => return "Hello, Alice!"
            `name` = ""        => return "Hello, World!"
Pseudocode 
  check the name for type 
  we can capitalize the first letter and name and change the rest of the body to lowercase and slice off the first letter 
  name[0].toUpperCase() + name.toLowerCase().slice(1)

*/