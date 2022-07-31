// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";


function chromosomeCheck(sperm) {
  return sperm === 'XX' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a daughter."
}


/*
Parameters will accept a string of 'XX' or 'XY'
Return a string of gratulations! You're going to have a daughter." if the chromosomes contains a 'XX' if it contains 'XY' return Congratulations! You're going to have a son.
Example 
    'XX' => "Congratulations! You're going to have a daughter."
    'XY' => "Congratulations! You're going to have a son."
Pseudocode 
create a ternay operator that test if the sperm === 'XX', if true return  "Congratulations! You're going to have a daughter." else return "Congratulations! You're going to have a son."
*/
