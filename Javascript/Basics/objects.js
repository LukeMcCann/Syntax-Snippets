
// Objects are Key value pairs
const fitBitData = {
    totalsteps : 308727, 
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13',
};

console.log(`Total steps: ${fitBitData.totalsteps}`);

console.log(fitBitData['avgCalorieBurn']);

const numbers = {
    100: 'one hundred',
    16: 'sixteen'
}

console.log(numbers['100']);

const emptyObject = {}

emptyObject['firstEntry'] = 4.0;

emptyObject.secondEntry ='miachael';

console.log(emptyObject.firstEntry);

console.log(emptyObject.secondEntry);

const student = {
    name: 'Luke', 
    surname: 'McCann', 
    strengths: ['programming', 'music'],
    grades: {
        computer_science: 92,
        music: 87
    }
};

console.log(student.grades.computer_science);

console.log(student['grades']['music']);


const shoppingCart = [
    {
        product: 'HeadFirst PHP', 
        price: 20.00,
        quantity: 1
    },
    {
        product: 'Laravel Quick Start',
        price: 18.00,
        quantity: 1
    }
];

console.log(shoppingCart[0].product);


const game = {
    player1: {
        username: 'Surion',
        playingAs: 'x'
    },
    player2: {
        username: 'Marco',
        playingAs: '0'
    },
    board: [['0', null, 'x'], ['x', '0', 'x']]
}

console.log(game.player1.playingAs);

// Objects and array constants save by reference
// variables save by value
// Changing a object saved by reference changes the original object
// Example: 

const original = {
    red: 'red',
    green: 'green'
};

const updated = original;

updated['purple'] = 'purple';

console.log(original);


let originalVar = 20;

let updatedVar = originalVar;

console.log(updatedVar);
