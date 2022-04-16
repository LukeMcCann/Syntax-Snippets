const person: {
    name: string,
} = {
    name: 'Luke',
}

const copiedPerson = { ...person, age: 27 };

// since const is a referenced value in memory
// we need to spread the properties into a new
// object to create a new copy, otherwise
// we end up copying the reference in memory instead.


const person2: {
    name: string,
} = {
    name: 'Darryl',
}

const copiedPerson2 = person2;
person2['age'] = 28;

console.log({ person });
console.log({ copiedPerson });
console.log({ copiedPerson2 });
