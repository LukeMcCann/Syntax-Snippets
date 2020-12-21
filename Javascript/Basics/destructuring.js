
// Pre-destructuring

const raceResults = [
    'Eliud Kipchage',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward',
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const copper = raceResults[2];

// New Destructuring method

const [gold, silver, bronze] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);

console.log(raceResults);

// skipping entries
const [first, , ,fourth] = raceResults;

console.log(fourth);


// using REST operator
const [winner, ...losers] = raceResults;

console.log(winner);
console.log(losers);


// Destructuring objects

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya", 
    title: "Elder of the Order of the Golden Heart of Kenya"
}
const {first, last, country} = runner; 

first;
last;
country;


 