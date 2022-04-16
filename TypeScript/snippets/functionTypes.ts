let futureFunction: Function;

const add = (x: number, y: number) : number => {
    return x + y;
};

const printStr(str: string): void => {
    console.log(str);
}

futureFunction = add;
futureFunction = printStr;

// We an use the Function type as above, but this is not very explicit.
// As you can see we are able to set two completley different functions
// to be this function in the future. Therefore, we have no idea what
// our function might possibly look like later on.
