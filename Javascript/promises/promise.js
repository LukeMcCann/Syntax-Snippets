const res = Promise.resolve({ id: 1 }) // returns a resolved promise
res.then(result => console.log(result));

const rej = Promise.reject(new Error('Promise Rejected!'));
rej.catch(err => console.log(err));
