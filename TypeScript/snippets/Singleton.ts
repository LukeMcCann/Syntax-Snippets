class Singleton {

    private static instance: Singleton;
    private static counter: number = 0;

    private constructor() {}

    static getInstance() : Singleton {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Singleton();
    }

    static get getCounter() : number {
        return this.counter;
    }

    static incrementCounter() : void {
        this.counter++;
    }

    static decrementCounter() : void {
        this.counter--;
    }
}

Singleton.incrementCounter();
Singleton.incrementCounter();
Singleton.decrementCounter();
Singleton.incrementCounter();
console.log(Singleton.getCounter);
