const posts =[
    {title: 'Post One', body: 'This post one'},
    {title: 'Post Two', body: 'This is post two'}
]

// Difference between callback and promise
// 
// A callback is a function called inside another funciton
// a callback may or may not be performed asynchronously.
// Normally a callback will run after the parent function completes
// its operation. 
//
// A promise is an object which takes a callback
// A promise is considered easier to use and maintain
// rather than just passing in a callback.
// As you will see then() taks two arguments
// one which runs in case of success
// one which runs in case of failure.
// Promises improve readbility.


// To use a promise instead of a callback
// we return a Promise object passing in a callback
// which takes a resolve and a reject
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            // Simulate server error
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost(
    {
        title: 'Post Three', 
        body: 'This is post three'
    }
).then(getPosts).catch(function (err) {
    console.log(err);
});