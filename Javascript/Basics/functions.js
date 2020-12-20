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