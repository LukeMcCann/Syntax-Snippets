function LoggerFactory (logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@LoggerFactory('LOGGING - PERSON')
class Person {
    public name: string = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}
