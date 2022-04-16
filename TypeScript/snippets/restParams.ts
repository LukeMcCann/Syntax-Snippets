const sum = (...numbers: number[]): number => {
    return numbers.reduce((a, n) => a + n);
}

const res: number = sum(2, 5, 3, 2);

console.log(res);
