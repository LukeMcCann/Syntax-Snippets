// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

const userInputElement = <HTMLInputElement>document.getElementById('user-input');

userInputElement.value = 'Hello World';
