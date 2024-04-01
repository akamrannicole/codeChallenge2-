
const inputString = 'The Quick Brown Fox';
const swappedString = swapString(inputString);


// function that accepts a string as input and swaps the case of each character.
function swapString(String){
//initialize an empty string to store the swapped string result
let swappedString = '';  
//using (loop for) loop through each character in the input string
for (let i = 0; i < String.length; i++){
// Inside the loop, we access each character of the string using string[i].
// Here, i represents the index of the current character we are accessing.

//Case conversion 
if (String[i] === String[i].toUpperCase()) {
    // If the current character is uppercase:
    // We convert it to lowercase and append it to the swapped string.
    swappedString += String[i].toLowerCase();
    // If the current character is lowercase,
    // We convert it to uppercase and move it to the swapped string.
    swappedString += String[i].toUpperCase();
}
return swappedString;
}
}

console.log( swapString(inputString));
