// Add event listeners to the buttons, one should say hello, one should say bye.

const helloBtn = document.querySelector('#hello');
const byeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', () => {
    console.log('hello'); 
});

byeBtn.addEventListener('click', () => {
    console.log('goodbye'); 
});
