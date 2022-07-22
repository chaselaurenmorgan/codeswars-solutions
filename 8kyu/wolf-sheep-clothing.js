// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"



    function warnTheSheep(queue) {
        let indexOfSheep = queue.reverse().indexOf('wolf') 
        return indexOfSheep -1 === -1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${indexOfSheep}! You are about to be eaten by a wolf!`
      
      }

/*
Create a function that finds the index of the 'wolf' in an array and return the following: 
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Index of the array is in reverse order 
/ [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

Parameters => an array that contains a list of 'sheep' and one 'wolf'
Returning  the string Oi! Sheep number X! You are about to be eaten by a wolf! if wolf is closest to a sheep return the string plus number of the sheet otherwise return "Pls go away and stop eating my sheep"
Example => 
    ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] => "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    length = 8   indexOf wolf =  6 


    ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"] =>    "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    ["wolf"] => 
    "Pls go away and stop eating my sheep"
Pseudocode 
   queue.reverse().indexOf('wolf') 
   will give us the index of the sheep 
   the code for if there are no sheep 
   queue.reverse().indexOf('wolf' -1) 
*/