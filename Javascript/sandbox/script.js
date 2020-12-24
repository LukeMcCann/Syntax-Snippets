const pokemon = {
    name: 'Charizard',
    type: ['Fire', 'Flying'],
    level: 100,
    moves: [
        'Fire Blast',
        'Dragon Claw',
        'Outrage',
        'Fly'
    ]
}

for (let x in pokemon) {
    console.log(`${x} : ${pokemon[x]}`);
}