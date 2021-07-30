// Node libuv Multithreading

// While the main event loop in Node is indeed single threaded,
// and all user run code is run on this one thread, 
// claiming Node as entirely single threaded is inaccurate. 

// If we take a look at the pbkdf2 hashing function
// this hashing funciton is computationally expensive
// it is a cryptographic function which uses password
// based key derivation with a sliding computational 
// cost.

const { pbkdf2 } = require('crypto');
const start = Date.now();
const doExpensiveHashing = () => {
  pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
    console.log(`Done in ${Date.now() - start}ms`);
  );
};
doExpensiveHashing(); // Done in 938ms

// Running this first function we see the hashing
// is completed in just under a second. 
// Logically, we can assume to expect that 
// running this function multiple times 
// will increase the cost by the same
// amount each time, also increasing the
// time taken to complete by around
// the same amount. This means
// we should reasonably expect around 4 seconds
// for execution to complete.

const { pbkdf2 } = require('crypto');
const start = Date.now();
const doExpensiveHashing = () => {
  pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
    console.log(`Done in ${Date.now() - start}ms`)
  );
};
doExpensiveHashing(); // Done in 937ms
doExpensiveHashing(); // Done in 942ms
doExpensiveHashing(); // Done in 943ms
doExpensiveHashing(); // Done in 948ms

// Instead, we see the results are
// that each function runs in relatively
// the same amount of time as running
// the function a single time. 
// This is Node, or more specifically libuv,
// kicking off multiple threads in the os.
// Whenever we get to the level of node
// where we are interacting wiht the os,
// we do so via libuv. The V8 engine
// compiles JS down to C++, when 
// the engine sees native node modules
// libuv is utilised to access the os
// providing it's multithreading capabilities. 
// We can see this by changing the pool size
// of the threads to 1 to simulate what we
// would expect if this code was running on a single
// thread.

process.env.UV_THREADPOOL_SIZE = 1;
{
    const { pbkdf2 } = require('crypto');
    const start = Date.now();
    const doExpensiveHashing = () => {
        pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
        console.log(`Done in ${Date.now() - start}ms`)
      );
    };
}
doExpensiveHashing(); // Done in 936ms
doExpensiveHashing(); // Done in 1865ms
doExpensiveHashing(); // Done in 2813ms
doExpensiveHashing(); // Done in 3765ms
