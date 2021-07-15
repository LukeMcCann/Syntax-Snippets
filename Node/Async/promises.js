// Promise
// 
// An object that holds the
// eventual result of an asynchronous
// operation.
//
// When an asynchronous operation completes
// it can result in either a value, or an error.
//
// A promise, "promises" to return this object.
//
// This object can be in one of three states.
// When we initially create a promise object it 
// is in the pending state, at this point it
// kicks off some async operation. From this point
// the promise can either be "fulfilled" (resolved) or 
// rejected (unresolved).

const p = new Promise((resolve, reject) => {
    console.log('Kicking off Async task...');
    setTimeout(() => {
        console.log(`Reading user from database...`);
        resolve(1);
    }, 2000);
});

p.then(result => console.log('Result', result));
