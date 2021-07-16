const res = Promise.resolve({ id: 1 }); // returns a resolved promise
res.then(result => console.log(result));

const rej = Promise.reject(new Error('Promise Rejected!'));
rej.catch(err => console.log(err));


// When rejecting a promise it is best to create a new Error
// as JS shows a stack trace for every Error thrown.
