// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.


function mouthSize(animal) {
    // code here
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
  }

  /*
  Create a function that accepts argument of string 'alligator' and return 'small' if not return 'wide'
  Paramenters => accepts a string for the animal 
  Return => if the animal === 'aligator' ? 'small' : 'wide'
  Example   
    "toucan" => "wide
    "ant bear" =>"wide"
    "alligator" =>"small"
Pseudocode 
create a test condition/conditional to see if animal.toLowerCase() === 'alligator'
if the test condition is false return 'wide'
  */
