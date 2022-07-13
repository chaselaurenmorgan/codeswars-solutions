// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
    let totalPoints = 0
    for(let i = 0 ; i < games.length; i++){
        if(games[i][0] > games[i][2]){
          totalPoints += 3
        }else if(games[i][0] < games[i][2]){
          totalPoints += 0
        }else {
          totalPoints += 1
        }
    }
    return totalPoints
  }

/*
Create a function that takes the collections of string in the array and counts the points of our team in the championship.
Parameter is one array with to elements inside Each element is a string combination '3:1' => x:y 
Returning the total points in a single value which will be a number. If x > y +=== 3 , x ===y => += 1, y > x ==-1
Example ['1:1, 2:0,1:4'] => 4 
Psuedocode 
1. Need to iterate over the array with either a for loop or map and also create a variable to hold the total points 
2. Using the for loop, access the 'x' and the 'y' inside of the array => games[0] and games[2]
3. write a if/else statement inside of the block code testing for the condition 

*/