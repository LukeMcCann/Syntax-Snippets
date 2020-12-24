const pokemon = [
    'Charmander',
    'Squirtle',
    'Bulbasaur',
];

pokemon.forEach((pokemon) => {
    console.log(pokemon);
});


const users = [
    {
        id: 1, 
        name: 'Darryl'
    },
    {
        id: 2,
        name: 'Robert'
    },
    {
        id: 3,
        name: 'Jean'
    }
]

const ids = users.map((user) => {
    return user.id;
});

ids.forEach((id) => {
    console.log(id);
});

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