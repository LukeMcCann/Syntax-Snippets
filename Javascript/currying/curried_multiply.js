// function multiply(a, b, c) {
//     return a * b * c;
// }

// multiply(1, 2, 3);

function curriedMultiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

curriedMultiply(1)(2)(3);
