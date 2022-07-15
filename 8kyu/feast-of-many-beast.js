// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    //your function here
    return dish.startsWith(b[0]) && dish.endsWith(b[b.length - 1])
    }

/*
Create a function that returns a boolean if the animal dish matches the first and last letters of the animals name 
Parameter - two arguments, which will be string of multiple words 
Returning a boolean if the animal names first and last letters matches the animals dish 
example great blue heron", "garlic naan" => true  - (g) garlic great (n) heron nanan 
        "chickadee", "chocolate cake"  => true  (c) chickadee, chocolate   (e) chickadee cake 
        brown bear", "bear claw => false  (b) brown bear !=  tw 
Psuedocode - 
compare the begining of beast to the beginning of dish and compare the ending of beast to the ending of dish                   
*/