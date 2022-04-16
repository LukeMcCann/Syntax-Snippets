type MyCustomType = 'Custom' | number;

const createCustom = (nonCustom: any) => {
    return (nonCustom as MyCustomType);
}


const str = 'Hello';
let res = createCustom(str);

console.log({
    res: res,
    type: typeof res,
});
