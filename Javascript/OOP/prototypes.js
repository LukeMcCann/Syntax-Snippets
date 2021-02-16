// Prototype

// Create a Particle object
function Particle() {
    this.x = 900;
    this.y = 99;
    // this.show = () => {
    //     point(this.x, this.y);
    // }
}

// Make a new object
// new runs a funciton differently to how it would usualy run.
// While the function is the same as any other function, the execution
// of the function is performed slightly differently when using the new
// keyword.
//
// new tells the browser to exeute this funciton as a constructor funciton
// which makes a new object, and assigns that object to the 'this' keyword.
//
// In this example we create the show() function wihtin the object, this
// works but would not be efficient. Lets say we want to create multiple
// particles. Each particle would define it's own show method, the show
// method however may be exactly the same for each particle, meaning
// we only want to have to define it once.
// 
// We can therefore forget about our show function declared within the Particle object.
// and instead assign it via a prototype.

Particle.prototype.show = () => {
    point(this.x, this.y);
}

// Both of these particles have their own
// x and y properties, the data in these objects is treated individually
// attched to each object.
//
// if I increate the value of x on p1 then the value of x on p2 will not change.
// this is because they are separate instances.
//
// The show funciton however, should function the same for all particles.
// in this case it is beneficial to not have to create the funciton for each object
// as we want it to act exactly the same each time. It would therefore be more beneficial
// to be able to define the show() funciton, in a locaiton which the object could then
// go and grab when it wants to call said function.

// In this case we have defined a prototype
// this would look similar to
//
//  p1
//   |
//   | 
//   ----> x
//   |
//   |
//   ----> y
//   |
//   |
//   ----> prototype ------> Paticle.prototype
//                                    |
//                                    |
//                                    -----> show()
//
//
// This is what is often referred to as the prototype chain.
// Here the p1 points to a Particle.prototype which itself has a show function
// This can be chained further. If we wanted to change the function for a particular
// particle then we can override the show function within the object.
//
// Whent we call the show function on the object, the object looks in the 
// prototype and calls the function if it does not exist wihtin the object.

// Global vars to enable access from the console for learning
var p1;
var p2;
var v;

function setup() {
    createCanvas(600, 300);

    p1 = new Particle();
    p2 = new Particle();

    v = createVector(3, 4);
}

// If we taka  P5.vector as an example
// we can look at the contents of the vector object.
// in the first part of the object are our properties
// specific to each individual instance.
//
// under __proto__ we have our prototype, which supplies the functions
// shared between all objects created from this protoype. 
//
// This is incredibly powerful as it essentially do something
// which other class based languages would not allow you to do. 
// You can modify the 'class' (prototype) programmatically.
//
// Lets say we have a library, and we write our own function that
// would fit well wihtin that library. We can extend the libraries
// funcitonality by adding our own function to that library:

// Modifying library prototype
p5.Vector.prototype.double = () {
    this.x *= 2;
    this.y *= 2;
    this.z *= 2;
}


// The prototype chain
//
// __proto__ refers to a property of the prototype which is a pointer (reference)
// up the prototype chain to the Object.prototype
//
// In JS everything is an object, all objects inherit from Object.prototype
// much like how in class based languages every object inherits from the Object class
// just like in class based languages the Object prototype has methods which may be called on 
// all objects.
p1.hasOwnProperty('z');
