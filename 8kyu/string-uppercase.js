// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    // your code here
    return this == this.toLocaleUpperCase()
  }



  /*
  Creat a method to see if the sting is all caps 
  Paramter => string 
  Return => boolean to test if the string is uppercase 
  Example  => 'HELLO WORLD' => true    'abc' => false    'AbKbsss'=> false 
  Pseudocode => 
  use 'this' kw to access the input 
  this === this.toUpperCase 
  the above method does not work because we need to run it in strict mode 
  JavaScript converts the 'this' kw into an object 
  when using the === it compares the value and the type  so the in this kata the value would true but the type would be incorrect
  us I have to use == or use strict mode 
  this == this.toUpperCase()
  */