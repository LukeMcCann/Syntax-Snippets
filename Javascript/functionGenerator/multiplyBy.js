function createMultiplierFunction(n) {
    return function (x) {
        return x * n;
    };
}

let multiplyBy2 = createMultiplierFunction(2);

multiplyBy2(5);
