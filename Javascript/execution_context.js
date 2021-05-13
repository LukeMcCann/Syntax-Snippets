// When code is run a global execution context
// is created for you
// this creates the Global Object which includes
// the special variable 'this'
//
// The JS engine creates these two things whenever
// your code is run, because your code is wrapped
// inside an Execution Contex

// When a variable/function is created
// and they are not lexically seated within 
// a function, they are attached to the 
// Global Object

var a = 'Hello World!';

function b() {

}
