// In JS call and apply can be used to invoke methods much like 
// using parentheses.

// If we have an object 

var obj = { 
    name: 'Jane Doe', 
    greet: function(param1, param2) {
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

obj.greet.call({name: 'Martin Calbeck'}, param1, param2);

// The apply method functions in much the same way
// only if parameters are passed to the function, 
// we pass an array of parameters ratger tgab tge call method which 
// takes parameters separately. 

obj.greet.apply({name: 'Martin Calbeck'}, [param, param2]);
