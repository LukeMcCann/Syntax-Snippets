// Fetch is part of the Window object
// Fetch is a newer standard than Ajax and XHR
// for dealing with HTTP requests.

// Fetch error handling differs from using Axios or JQuery
// if there is a HTTP error the .catch will not fire automatically
// You have to check the response and throw the error
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApiData);

function getText() {
    fetch('test.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => console.log(error));
}

function getJson() {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}

function getApiData() {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}