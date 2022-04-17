type CustomType = {
    title: string,
}

function identity<Type>(arg: Type) : Type {
    return arg
}

const outputString = identity<string>('Hello World!');
const outputInt = identity<number>(721011081081113287111114108100);
const outputBool = identity<boolean>(true);
const outputObject = identity<object>({ message: 'Hello World'});
const outputCustomObject = identity<CustomType>({ title: 'Custom' });
const outputFunction = identity<Function>(() => 'Hello World');

console.log(outputString);
console.log(outputInt);
console.log(outputBool);
console.log(outputObject);
console.log(outputCustomObject);
console.log(outputFunction);
