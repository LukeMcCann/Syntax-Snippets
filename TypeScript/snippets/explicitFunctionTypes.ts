let futureFunction: (x: number, y: number) => number;

const add = (x: number, y: number) : number => {
    return x + y;
};

const printStr = (str: string): void => {
    console.log(str);
}

futureFunction = add;
futureFunction = printStr;
