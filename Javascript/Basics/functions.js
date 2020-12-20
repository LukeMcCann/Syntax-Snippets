function add(a, b) {
    return a + b;
}

console.log(add(1,2));

function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function diceRoll() {
    return randomFromInterval(1,6);
}

console.log(diceRoll());