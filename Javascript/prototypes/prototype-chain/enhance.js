// Since JS prototypes are simply objects
// we can enhance them with our own properties.
// Since functions in JS are objects, this includes adding functions
// to our protoypes.

// It is worth noting that we are adding this to the Prototype object, accessed via the __proto__ reference which 
// every object has access to. We are not defining this on the array object. This means any item which
// has access to this prototype chain will have access to the method we define. 

// Single Instance
const arr = [1,2,3,4];

arr.print = function () {
    for (const item of this) {
        console.log(item);
    }
}

// Add to the overall Array object
Array.prototype.print = function () {
    for (const item of this) {
        console.log(item); 
    }
}
const arr = ['Hello', 'Mark', 1];
arr.print()
