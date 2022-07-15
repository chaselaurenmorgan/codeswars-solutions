// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    // your code here
    return cap >= on + wait ? 0 : (on + wait) - cap
  }

/*
Create a function that accepts three parameters cap,on, and with. If there is enough space return 0 else return the number of passengers that he can't take 
Parameters are theee arguments that all take whole number 
Returning 0 if there is enough space else return number of passangers that he can't take. Returning a number 
Example 10, 5, 5 => 0   25, 15,15 =>  10  20, 5, 5  => 0
Psuedocode 
create a test condition where the on + wait has to be less than or equal to
cap >= on + wait return 0 
To get the number that cannot board 
(on + wait) - cap 
to create this test condition can use a teranary operator 
*/