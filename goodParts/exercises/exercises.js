const add = (x, y) => x + y;

const sub = (x, y) => x - y;

const mul = (x, y) => x * y;

const identityF = (arg) => () => arg;

const addf = (x) => (y) => x + y;

const liftf = (binary) => (x) => (y) => binary(x, y);

const curry = (binary, x) => (y) => binary(x, y);

const altCurry = (binary, x) => liftf(binary)(x);

// increment functions
//
// The key cornerstone of functional programming
// is to let the functions do the work.

const inc1 = addf(x, 1);

const inc2 = liftf(add)(1);

const inc3 = curry(add, 1);


const twice = (binary) => (x) => binary(x, x);   

const reverse = (binary) => (x, y) => binary(y, x);



const composeu = (x, y) => (a) => y(x(a));

const composeb = (binaryA, binaryB) => (x, y, z) => binaryB(binaryA(x, y, z));

const limit = (binary, count) => (a, b) => {
    if (count >= 1) {
        count -= 1;
        return binary(a, b);
    }
    return undefined;
} 


const from = (start) => () => {
    let next = start; 
    start += 1; 
    return next;
}


const to = (gen, end) => () => {
    let value = gen();
    if (value < end) {
        return value;
    }
    return undefined;
};

const fromTo = (x, y) => () => to(from(x), y);

const element = (array, gen) => () => {
    let index = gen();
    if (index !== undefined) {
        return array[index];
    }
}


const elementImproved = (array, gen) => () => {
    if (gen === undefined) {
        gen = fromTo(
            0,
            array.length,
        );
    }
    return function () {
        let index = gen();
        if (index !== undefined) {
            return array[index];
        }
    }
}
