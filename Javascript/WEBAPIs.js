// Not all features we use are a part of the native JS language.
// We use plenty of Browser specific API's and engine-specific API's
// which are standardised using WDN's rules. 

// This means we can rely on this funcitonality to exist anywhere, though
// the way it does it may vary. 

// setTimeout is one such funciton. This is a bare-bones
// example showing how setTimeout works in the browser.
// This is not at all realistics, for a start a real browser
// would be written in a language like C++.

class Browser {
    constructor() {
    }

    setTimeout(time, closure) {
       // The Browsers setTimeout method would run:
       // Timer = new Timer(time)
       // Timer likely puts the browsers thread to sleep
       console.log(`setTimeout called with time: ${time}`);
       // The closure is run after the specified time has padded
        closure();
    }
}

const Chrome = new Browser;

Chrome.setTimeout(5000, () => console.log('Closure running...'));
