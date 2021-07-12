// Blocking Code
// The code will execute
// one after the other
// In synchronous code
// the first line runs
// the second must then wait
// for the first to finish executing
console.log('Before');
// When We run AsynChronous code 
// we are running non-blocking code.
// This means that our code is run, then left
// the rest of the code is continue to be run
// then once our code finishes executing
// a callback is called to return the result.
setTimeout(() => {console.log('Connecting to DB...')}, 2000);
console.log('After');
