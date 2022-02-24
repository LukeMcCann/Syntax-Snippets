class AbstractThing {

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    doSomething() {
        console.log(`${this.title} does it's thing!`);
    }
}

class Thing extends AbstractThing {

    constructor(title, description) {
        super(title, description);
    }
    
}


const roboDog = new Thing('Robot Dog', 'A robotic dog');

roboDog.doSomething();
