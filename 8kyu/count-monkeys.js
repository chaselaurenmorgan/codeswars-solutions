// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n){
    let count = []
    for(let i = 1; i <=n ; i++){
        count.push(i)
    }
    return count
}



/*
Create a function that counts all the way up to and including the input, starting at 1.
Parameters is a non negative integer 
Returning an array of numbers counting to and including the input, starting from 1.
Example 6 => [1,2,3,4,5,6] ,  3 => [1,2,3], 9 => [1,2,3,4,5,6,7,8,9]
Psuedocode 
1. Create an empty array variable to store the count 
2.to count to input of n , use a for loop 
3. start from 1, in the intializer part of the for loop use a 1 
4. to include the input of n, in the test condition portion of the for loop i <= n
5. in the code block push the total count into the empty array by adding i 
6.return the count variable 


*/