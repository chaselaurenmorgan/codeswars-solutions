// Build a function that returns an array of integers from n to 1 where n>0.Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let reverseArr = []
    for(let i = n; i > 0 ; i--){
        reverseArr.push(i)
    }
    return reverseArr
  };




  /*
  Paramenter a whole number, n
  Return an array from 1 to the input number 
  Example n=5 --> [5,4,3,2,1]
  Psuedocode 
  create a variable with an empty array 
  use a for loop starting at 5, loop up until the number i >0, i--
  then push numbers into an empty array 
  return the variable 
  */

