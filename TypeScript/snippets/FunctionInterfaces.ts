interface FunctionInterface {
    (a: number, b: number): number;
}

let add: FunctionInterface;

add = (a: number, b: number) => {
    return a + b;
}
