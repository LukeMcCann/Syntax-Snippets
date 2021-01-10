// Fetch is part of the Window object
// Fetch is a newer standard than Ajax and XHR
// for dealing with HTTP requests.
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApiData);

function getText() {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getJson() {
    fetch('posts.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getApiData() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}