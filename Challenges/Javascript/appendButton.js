
const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    let button = document.createElement("BUTTON");
    button.innerHTML = 'Hey!';
    container.append(button)
}
