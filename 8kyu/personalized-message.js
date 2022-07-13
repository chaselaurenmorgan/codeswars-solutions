// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.



function greet (name, owner) {
    // Add code here
    return name === owner ? 'Hello boss' : 'Hello guest'
  }



  /*
  Parameters: two name and owner, will be strings 
  Returning a string of 'Hello boss' if name === owner  , 'Hello guest' name!== owner 
  Example 'Mike','Mike' => 'Hello boss', 'Mike','Jason' => 'Hello guest'
  Psuedocode use a ternary operator to test the condition if name === owner 
  */