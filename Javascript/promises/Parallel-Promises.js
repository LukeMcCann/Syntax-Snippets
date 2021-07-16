// Parallel Promises

const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Async OP 1!');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async OP 2!');
        resolve(2);
    }, 2000);
});

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async OP 3!');
//         reject(new Error('Something went wrong!'));
//     }, 2000);
// });

Promise
    .all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));

// This will kick off both operations almost at the same time.
// It is important to realise we cannot have these operations run
// exactly at the same time as we are dealing with a single thread. 
