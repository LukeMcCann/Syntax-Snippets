const people = require('./people');

for (const person of people) {
    console.log(person.sayHi());
}


// In Node index.js is a special name, if we have an
// index.js file within a directory we are able to 
// export all of the files within the directory by exporting
// each of them, then requiring them, within the index.js
// to once again be exported to our accessing file. 