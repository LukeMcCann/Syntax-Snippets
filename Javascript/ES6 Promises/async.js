// Async 
//
// adding async in fonrt of a function
// forces the function to return a promise.
// promises run asynchronously, by "promising",
// to execute once the execution stack is empty.
//
// This is similar to how callbacks work, 
// however promises provide then() and catch()
// then() allows you to define the the behaviour
// upon the proise resolving, while the 
// catch allows you to define the behaviour should the 
// promise be rejected.

// await can be used to wait for the resolution of an async function

async function myFunc() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => res('Hello'), 1000);
    });

    const error = true;

    if (!error) {
        const res = await promise; 
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));