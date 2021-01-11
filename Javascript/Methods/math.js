// Random Whole number
function randomWholeNum() {
    return Math.floor(Math.random() * 20);
}  
console.log(randomWholeNum());

// Random Range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convert Binary
// The second argument of parseInt is the radis (the base numeber)
function convertBinToInteger(bin) {
    return parseInt(bin, 2);
}
console.log(convertBinToInteger("10011"));