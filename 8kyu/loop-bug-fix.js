// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
  }


/*
Figure out why this code is creating an infinite loop 
Most infinite loop happen b/c the test condition never evaluates to false
In the code there is no counter to update or increment the counter variable 
*/