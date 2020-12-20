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

let password = 'madrid120'
function validate(enteredPassword) {
    if (enteredPassword !== password) {
        return false;
    }
    return true;
}

console.log(validate('guess'));

console.log(validate('madrid120'));


function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.indexOf(' ') >= 0) {
        return false;
    }

    if (password.indexOf(username) >= 0) {
        return false;
    }

    return true;
}

console.log(isValidPassword('michalefarrer002', 'harmon'));


// Function expression 
// Function expressiosn are not hoisted unlike delcarations, this means 
// they cannot be used before they are created

// similar to anonymous funcitons in PHP

const square = function (num) {
    return num * num;
}
console.log(square(7));



function add(x,y) {
    return x + y;
}

function multiply(x,y) {
    return x * y;
}

function subtract(x,y) {
    return x - y;
}

function divide(x,y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

console.log(operations[0](4,2));

for (let func of operations) {
    console.log(func(100,20));
}


const thing = {
    dosomething : multiply
}

console.log(thing.dosomething(5,20));

// Functions as return values
// these can be thoght of as function factories

function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(5));
console.log(double(5));


function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(0,18);

console.log(inAgeRange(17));
console.log(inAgeRange(21));


// Callback functions
// functions passed into other functions as an argument
// invoked in the outer function

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('GAHH GO AWAY!');
});