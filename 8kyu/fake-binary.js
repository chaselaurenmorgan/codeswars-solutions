// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.Note: input will never be an empty string



function fakeBin(x){
    let fakeNum = ''
    for(let i = 0; i < x.length; i++){
        if(x[i] < '5'){
            fakeNum += '0'
        }else {
            fakeNum +='1'
        }
    }
    return fakeNum
}





/*
Create a function wher you replace any number below 5 with 0 and and any number 5 and above with 0. Return the resulting string.
Paramenter - string of numbers 0 - 9 
Returning a string with numbers below 5 to 0 and numbers above 5 will be converted to 1 
Example - '45385593107843568' => '01011110001100111'
Psuedocode 
    1.create a new variable to hold the fake binary 
    2. iterate through the string with a for loop
    3. within the for loop create an if/else that will check each number in the string index to see if the number is below 5 and return 0 and if it is above 5 return 1


*/

