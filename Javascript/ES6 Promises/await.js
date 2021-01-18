async function getUsers() {
    // await the response of the fetch call
    const response = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    // Only proceed once the promise resolves
    const data = await response.json();
    // Only proceed once the second promise resolves.
    return data;
}

getUsers()
    .then(users => console.log(users));