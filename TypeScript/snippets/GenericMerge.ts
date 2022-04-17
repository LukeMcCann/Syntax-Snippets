function merge<T, U>(objA: T, objB: U) : T & U {
    return Object.assign(objA, objB);
}

const JonSnow = merge({ forename: 'Jon' }, { surname: 'Snow' });

console.log(JonSnow.forename);
