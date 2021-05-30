# Modules

Modules are self-contained pieces of code that are reusable and isolated.
Any module should be self-contained, not interacting with, or leading to,
unintentional changes in the functionality of unrelated code. 

If we require in a file in node we can see that the code will run.

<code>
<pre>
// Server.js
require('./greet');

// Greet.js
console.log('Hello World');
</pre>
</code>

This code will run as it does not alter the functionality or lead to
unintentional changes. Whilst it is run, it is self-contained. 
However, if we attempt to call a method accross these files

<code>
<pre>
// Server.js
require('./greet');
greet();

// Greet.js
function greet() {
    console.log('Hello');
};

</pre>
</code>

We now receive a <code>"greet is not defined"</code> error.
This is by design, a module should not only encapsulate code
but also ensure we have no unintentional effects from the module itself.
The code inside greet.js is therefore <code>protected</code> unless we specifically
tell JavaScript that we want to use it. 

This prevents collisions on methods accross files declared with the same name.
In node we do tell JavaScript to explicitly include a module through the exports function.

<code>
<pre>
// Server.js
const greet = require('./greet');
greet();

// Greet.js
function greet() {
    console.log('Hello');
};
module.exports = greet;
</pre>
</code>
