function containsOnlyNumbers(array) {
    if (!numbers.some(isNaN)) {
        return true;
    }
    return false;
}

function avg (numbers) {
    if (containsOnlyNumbers(numbers)) {
        let sum = 0;
        for (let number of numbers) {
            sum += number;
        }
        return sum / numbers.length;
    }
    return NaN;
}

let numbers = [1, 2, 3, 6, 7];
console.log(avg(numbers));