const names: Array<string|number> = ['Jon', 'Ned', 12];

// for (let name in names) {
//     console.log(name);
// } // 0, 1, 2 - logs the index

for (let name of names) {
    console.log(name);
} // Jon, Ned, 12 - logs the values


const king = {
    name: 'Tommen',
    age: 13,
}

for (let key in king) {
    console.log(key);
}
