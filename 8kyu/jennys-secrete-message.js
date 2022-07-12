// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. (Debug)





// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

function greet(name){
    return name === 'Johnny'? "Hello, my love!" : "Hello, " + name + "!"
}




  /* 
Debugging a function that returns a greeting for user. 
Changed into a ternary operator 

  */ 