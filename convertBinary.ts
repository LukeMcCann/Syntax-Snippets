const convertBinaryToDec = (binNum: string) => {
    return Array.from(binNum).reverse().reduce((accumulator, currentValue, index) => {
        const binaryDigit = Number(currentValue);
        return accumulator + binaryDigit * Math.pow(2, index);
    }, 0);
}

const decimalValue = convertBinaryToDec('010010');
console.log(decimalValue); // Output: 18
