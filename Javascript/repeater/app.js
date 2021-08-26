const h1 = document.querySelector('h1');
const input = document.querySelector('input[type=text]');

input.addEventListener('input', () => {
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    } else {
        h1.innerText = input.value;
    }
});
