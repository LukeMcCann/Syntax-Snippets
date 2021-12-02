function outer() {
    let backpack = 'some data';
    return function inner() {
        return backpack;
    }
}
console.log(outer()());
