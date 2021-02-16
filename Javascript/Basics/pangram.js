function isPangram(sententce) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (sententce.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));

console.log(isPangram('not a pangram'));