// In JS call and apply can be used to invoke methods much like 
// using parentheses.

// If we have an object 

var obj = { 
    name: 'Jane Doe', 
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

// We can invoke the greet funciton as such

obj.greet();

// However, we may also do this using the JS call method

obj.greet.call();

// The difference here is that the call method takes an optional 
// parameter in which we tell it what object to set the 'this' keyword
// as a reference to. 

obj.greet.call({name: 'Martin Calbeck'});
