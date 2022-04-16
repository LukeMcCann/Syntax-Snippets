let a: (string | number);
a = 1;
a ='1';
a = 'a';
a = false; // compiler error

let b: (string | boolean);
b = 'b',
b = false,
b = true,
b = '1',
b = 1; // compiler error
