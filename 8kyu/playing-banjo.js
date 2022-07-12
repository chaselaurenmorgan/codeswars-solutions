// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!


function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] === 'R' || name[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
  }



  /*
Create a function which answers a question. If name starts with the letter R or lower case r you are playing a banjo
Paramenters - takes a string of name, always a valid string 
Returns  - name + " plays banjo" , name + " does not play banjo"
Example - 'Adam' => does not play banjo , 'Ringo' => name + " plays banjo" 
Psuedoecode - compare the the first letter of name using index 0. 
            Will use a ternary operator, where it will name[0] === 'R' || name[0] === 'r'. if it is true then it will return a temperal literal with name. 
            `${name} plays banjo.`  and if it is false it will return  ${name} does not play banjo,`

  */