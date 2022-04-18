const root = document.getElementById('root');

let btn = document.createElement('button');
btn.innerHTML = 'Click Me';

class Printer {
    constructor(
        private responseMessage: string
    ) {}

    public displayMessage() : void {
        alert(this.responseMessage);
    }
}

const clickPrinter = new Printer('Clicked!');

btn.addEventListener('click', clickPrinter.displayMessage.bind(clickPrinter));

root.appendChild(btn);
