const person: {
    name: string,
    age: number,
    hobbies: string[],
} = {
    name: 'Luke',
    age: 27,
    hobbies: ['Guitar', 'Programming'],
};

const activities: string[] = ['Music', 'Sports'];

for (const activity of activities) {
    person.hobbies.push(activity);
}

console.log(person.name);
console.log(person.hobbies);
