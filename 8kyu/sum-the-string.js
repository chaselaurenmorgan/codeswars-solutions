// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
  return String(+a + +b )
}


/*
Parameters two inputs of a and b. will be string of number 
Return the sum of a and b in a string 
Example '1', '2' => '3' 
        '4', '5' => '9'
        '35', '5' => '40'
Pseudocode 
change a and b into number values 
+a   +b 
add the input together 
+a + +b 
change it back into a string 
String(+a + +b)
*/

