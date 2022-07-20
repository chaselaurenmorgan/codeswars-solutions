// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18


function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }


/*
Create a function that accepts the name and returns number of lisghsabers owned by that person. only one person owns lightsaber which is zach and he owns 18 and everyone has 0
Paramenters a string which is name that can be empty 
Return if the string === Zach then we can return 18 else return 0
Example 
'' => 0
Adam => 0
Zach => 18 
Pseudocode 
write test condition 
name === 'Zach' => 18 , otherwise return 0
*/