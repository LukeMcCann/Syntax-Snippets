
// Objects are Key value pairs
const fitBitData = {
    totalsteps : 308727, 
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13',
}

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
}

console.log(student.grades.computer_science);

console.log(student['grades']['music']);