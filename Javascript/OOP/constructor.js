// Constructor functions are like constructors of other languages.
// JS's falvor of OOP differentiates slightly from the OOP implementation
// of other languages like Java or PHP. 

// This is due to the functioning of the Prototype chain
// a highly powerful feature in JS. Rather than defining a 
// Class in the traditional sense, we instead define a constructor
// function. We then add to the objects prototype to define methods
// for the class to use. We can therefore picture our constructor
// as that of a constructor function in Java, without the wrapping
// class, and treat our Object as if it were defined as a class 
// with some additional features of the prototype chain (such as allowing
// prototypal inheritance). 

// ES6 does provide class syntax, but it is important to note that this
// is nothing more than syntactic sugar, JS sees this and creates a 
// constructor function and prototypal methods behind the scenes.

// When we use the new keyword 4 steps are performed by JS.
// Firstly, JS creates a new play JS object, then it links
// the constructor of this object to another object t which 
// it passes the newly created object from the first step as the
// "this" context, finally, if the object doesn;t return it's own
// object "this" is returned.

function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8).toString(16).slice(1));
 }

let red = new Color(255, 0, 0);

console.dir(red);

red.rgb();

