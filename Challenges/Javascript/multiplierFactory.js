const makeMultiplier = (x) => (y) => x * y;
const multiplyBy5 = makeMultiplier(5);

multiplyBy5(2);
