function *infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Generator functions values are not evaluated until
// they are required.

Generator.prototype.next()
Returns a value yielded by the yield expression.
Generator.prototype.return()
Returns the given value and finishes the generator.
Generator.prototype.throw()
Throws an error to a generator (also finishes the generator, unless caught from within that generator). 
