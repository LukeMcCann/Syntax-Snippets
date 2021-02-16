// Complete the function such that 
// the word passed in is returned
// starting with a capital letter
// followed by all lower case letters
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//sample usage
console.log(capitalize("john")); //John
console.log(capitalize("BRAVO")); //Bravo
console.log(capitalize("BLAne")); //Blane