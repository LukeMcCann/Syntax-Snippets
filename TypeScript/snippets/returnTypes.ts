function addNumerics(x: number, y: number): number {
    return x + y;
}

function addNumericsStringOutput(x: number, y: number): string {
    return (x + y).toString();
}

function addStrings(str1: string, str2: string) {
    return str1 + str2;
}

let res = null;
function sumResult(x: number, y: number): void {
    res += (x + y);
}

const oneAddFive: number = addNumerics(1, 5);
const oneAddFiveStr: string = addNumericsStringOutput(1, 5);
const helloWorld: string = addStrings('hello', 'World');
console.log({ sumRes: sumResult(10, 2)});

console.log({
    oneAddFive,
    oneAddFiveStr,
    helloWorld,
    res,
});
