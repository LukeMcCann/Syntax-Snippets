let h1 = document.querySelector('h1');
let input = document.getElementsByTagName("input")[0];

function hide() {
    if (input.checked) {
        // h1.classList.add('hidden');
        h1.innerHTML = "<h3>Hello</h3>";
    } else {
        h1.textContent = "<h3>Hello</h3>";
        // h1.classList.remove('hidden');
    }
}