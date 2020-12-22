/**
 * @param {string} word
 */
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//sample usage
console.log(capitalize("john")); //John
console.log(capitalize("BRAVO")); //Bravo
console.log(capitalize("BLAne")); //Blane