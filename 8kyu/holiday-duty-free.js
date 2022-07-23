// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * discount/100))
}

/*
Create a function the takes the norm price,discout, and cost of the holidays that will caluclate the cost of your holiday 
Paramenters => nomPrice , discount and hol will all be numbers 
Returning a single value - number represents the number of whiskey bottes you wil have to buy 
Example 
    12, 50, 1000), 166
    17, 10, 500), 294
    24, 35, 3000), 357
Pseudocode 
    What is the math that is going and how to get to 166 
   () Math.floor(12(normPrice)* 50(discount)/100 ) / 1000(hol))


*/