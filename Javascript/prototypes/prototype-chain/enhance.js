// Since JS prototypes are simply objects
// we can enhance them with our own properties.
// Since functions in JS are objects, this includes adding functions
// to our protoypes.

const arr = [1,2,3,4];

arr.print = function () {
    for (const item of this) {
        console.log(item);
    }
}
