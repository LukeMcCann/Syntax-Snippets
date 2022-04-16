const hobbies: string[] = ['Guitar', 'Programming', 'Weight-lifting', 'Boxing'];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1);

console.log(hobby2)

console.log(remainingHobbies);


const Person: {
    name: string,
    age: number,
    job: string,
} = {
    name: 'Pete',
    age: 21,
    job: 'Engineer',
};

const { job } = Person;

console.log(job);
