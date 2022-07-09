// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
//Solution 1 
    if(number % 2 === 0){
        return 'Even'
    }else {
        return 'Odd'
    }
//Solution 2 
    return number % 2 === 0 ? 'Even' : 'Odd'


/*Write + Prep 
Creating function that => 'Even' for even numbers and 'Odd' for Odd numbers 
P-Parameters 
Whole Numbers and Negative Numbers 
R- Return
Return the string 'Even' for even number or 'Odds' for odd numbers 
E-Example 
1 => 'Odd'
43 => 'Even'
P- Pseudocode 
-if else statement 
-tenary operator 
number % 2 === 0 
*/

}
console.log(even_or_odd(2))
console.log(even_or_odd(7))
console.log(even_or_odd(-42))
console.log(even_or_odd(-7))


