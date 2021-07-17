// Generators

// Normal functions can only be exited by a return
// or an error/exception being thrown. 
//
// In contrast, a generator is a function that can stop
// mid execution, this effectively sets a bookmark, which
// when the function returns continues execution
// from where it left off. 

// Rather than returning a single value, generators yield
// a sequence of results as an object.

// normal function:
function normalFunc() {
    console.log('I');
    console.log('cannot');
    console.log('be');
    console.log('stopped.');
}
normalFunc();

// Generator Function:
function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  // This will be executed first.
  // Hello, 
  // I will be printed after the pause
  // World!
  // undefined
