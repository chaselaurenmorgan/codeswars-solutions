// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.


function saleHotdogs(n){
    return n >= 10 ? n* 90 : n >= 5 ? n* 95 : n* 100
  }

/*
Parameters - 1 argument that accepts numbers , any kind of number 
Return back a number that represents the price that the customer needs to pay 
Example 
  n < 5	100
  n >= 5 and n < 10	95
  n >= 10	90
Pseudocode
I will use a ternary operator to solve this 
First condition n >= 10	
statement/return will 90 * n
Second condition   n >= 5  
statemenet/return 95  * n
and the catch or the else statement 
100 * n
*/