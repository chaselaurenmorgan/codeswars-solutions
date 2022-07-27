// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96


function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    let totalObstructedRows = nRows - row;
    let totalObstructedCols = nCols - (col - 1);
  
  return totalObstructedRows * totalObstructedCols;
    
  }


/*
Create a function that gives you total number of rows and columns  in the theater (nRows,nCols) and the row and column you're sitting in. return the number of people who sit stricly behind you  in your column or to the left assuming all seats are occupied. 
Parameters 
  4 parameters that will be numbers 
  nRows and nCol represents the the total number of rows and columns in a theater 
  col and row === row and column you're sitting in 
Return 
the number of people who sit strictly behind you and in your column or the the left 
Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96 
Pseudocode 
create a variable  totalObstructedRows =  nRows - row  => 11 -3 = 8 
create a another variable totalObstructedcolumns  =  nCols - (col-1) => 16 - (5-1)= 12
totalObstructedRows * totalObstructedcolumns


*/