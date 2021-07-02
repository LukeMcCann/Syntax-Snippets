let {room, weapon} = {
    "name": "Rusty",
    "room": "Kitchen",
    "weapon": "Candlestick",
}

room
weapon

// Swapping values
var a = 1, b = 2;
var temp = 2; 
a = b;
b = temp;

console.log(a, b);


// Destructuring approach
var a = 1, b = 2;
{a, b} = {b, a};
