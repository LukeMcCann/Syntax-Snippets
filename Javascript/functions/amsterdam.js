// Complete the function amsterdamIsFirstWord such that 
// it returns true when "Amsterdam" is the first word in 
// the description it receives, and false otherwise.

function amsterdamIsFirstWord(description){
    let words = []
    for (let i = 0; i < description.length; i++) {
        words = description.split(" ");
    }
    return words[0] === 'Amsterdam' ? true : false;
}

//sample usage
console.log(amsterdamIsFirstWord("Amsterdam is the capital of NL"));