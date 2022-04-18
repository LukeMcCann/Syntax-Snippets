const root = document.getElementById('root');

let btn = document.createElement('button');
btn.innerHTML = 'Click Me';

// AutoBind decorator
function AutoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjDescriptor;
}

class Printer {
    constructor(
        private responseMessage: string
    ) {}

    @AutoBind
    public displayMessage() : void {
        alert(this.responseMessage);
    }
}

const clickPrinter = new Printer('Clicked!');

btn.addEventListener('click', clickPrinter.displayMessage);

root.appendChild(btn);
