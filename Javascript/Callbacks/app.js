// Server Simulation
const server = [
    {
        title: 'Post1',
        body: 'My first blog post',
    },
    {
        title: 'Post2',
        body: 'Getting the hang of this',
    }
];

// SetTimeout used to simulate request times

// Synchronous
// function createPost(post) {
//     setTimeout(function () {
//         server.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = '';
//         server.forEach(function (post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// This will create a post and then get the posts 
// createPost({title: 'Post3', body: 'This is a new post'});

// getPosts();

// In the browser you will see Post1 and Post2 output
// this is because of the response times.
// The 'server' took two seconds to store the post
// but only 1 second to retrieve it, therefore
// when the getPosts() is run only 2 posts exist.
// this behaviour occurs because we wrote it in
// a synchronous format, we need to write it in
// as asynchronus format (concurrent) in order 
// to get the new post.

// Asynchronous
// we can insted pass in a callback function
// in doing so we must remember to pass in our
// function when we call the createPost function
function createPost(post, callback) {
    setTimeout(function () {
        server.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        server.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

// We pass in getPosts as our callback.
// when creatPost is called our callback 
// is callbed within the getPosts function
// before the request (timeout) ends. 
createPost({title: 'Post3', body: 'This is a new post'}, getPosts);
