// generic object
const cat: object = {
    name: 'Tammy',
    age: 5,
}

console.log(cat.sound);

// Person with types
const person: {
    name: string,
    age: number,
    nickname: string,
} = {
    name: 'Luke',
    age: 30,
    nickname: 'Newt',
};

console.log(person.nickname);
