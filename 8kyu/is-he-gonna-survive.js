// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?


function hero(bullets, dragons){
    //Get Coding!
    return bullets >= dragons * 2 ? true : false
}

/*
Parameters is two inputs bullets and drangos each will be a number 
Return a boolean, true if hero has enought bullets to survive and false if otherwise. 
Example 10,5 => true, 7,4 => false 
Psuedocode 
Need two bullets per dragon 
bullets >= dragons * 2 return true else return false 

*/


