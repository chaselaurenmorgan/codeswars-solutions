// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


function smash (words) {
    return words.join(' ').trim()
 };


/*
Create function that takes an array of words and joins them together in sentence and return the sentence and make sure there isn't a space at the beginning or the end of the sentence
Params will be an array of words 
Return a string from the array with no spaces in the front or back 
Example ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Psuedocode 
1. change the array to string using join('')
 words.join(' ') => return 'hello world this is great'
2.remove white space in the front or back of the string using trim()
words.join(' ').trim()
*/