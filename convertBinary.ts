const convertBinaryToDec = (binNum: string) => {
    return Array.from(binNum).reverse().reduce((accumulator, currentValue, index) => {
        const binaryDigit = Number(currentValue);
        return accumulator + binaryDigit * Math.pow(2, index);
    }, 0);
}

const convertDecToBinary = (decNum: number | string): string => {
    let numberToConvert = Number(decNum);
    if (isNaN(numberToConvert) || numberToConvert < 0 || !Number.isInteger(numberToConvert)) {
        throw new Error('Input is not a valid positive integer.');
    }

    if (numberToConvert === 0) {
        return '0';
    }

    const binaryNum = [];

    while (numberToConvert > 0) {
        const remainder = numberToConvert % 2;
        binaryNum.push(remainder);
        numberToConvert = Math.floor(numberToConvert / 2);
    }
    const binaryString = binaryNum.reverse().join('');
    
    return binaryString;
}


const binaryValue = convertDecToBinary(137);
console.log(binaryValue); 

