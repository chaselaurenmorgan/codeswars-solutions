// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


function peopleWithAgeDrink(old) {
    if(old < 14){
      return 'drink toddy'
    }else if(old < 18){
      return 'drink coke'
    }else if(old < 21){
      return 'drink beer'
    }else {
      return 'drink whisky'
    }
 };

 /*
 Create a funtion that recieves and age and returns what they drink 
 Parameters => a number 
 Return => a string of what the number drinks 
 Example => 
 / Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
Pseudocode 
test each condition in an if/eslse statement 
 */
