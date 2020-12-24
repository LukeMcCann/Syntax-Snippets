console.log(window);

// 64 Bit Encode String
const str ='hello';

let encrypted = btoa(str);

console.log(encrypted);

// Decode 64 Bit String
console.log(
    atob(encrypted)
);

let body = document.body;

let h1 = body.getElementsByTagName('h1');

// while(true) {
//     blur(h1);
// }

// window.fetch();

// console.log is part of the window object
// window.console.log();

// window.alert('Hello');

// if (confirm('Are you sure?')) {
//     console.log('YES');
// }

// let height = window.outerHeight;

// let width = window.outerWidth;

// console.log(`OuterHeight: ${height} : OuterWidth: ${width}`);

let innerHeight = window.innerHeight;

let innerWidth = window.innerWidth;

console.log(`InnerHeight: ${innerHeight} : InnerWidth: ${innerWidth}`);