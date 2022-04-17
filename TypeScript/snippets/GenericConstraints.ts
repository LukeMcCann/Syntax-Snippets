function merge<T extends Object, U extends Object>(objA: T, objB: U) : T & U {
    return Object.assign(objA, objB);
}

const JonSnow = merge({ forename: 'Jon' }, { surname: 'Snow' }, 30);

console.log(JonSnow.forename);
