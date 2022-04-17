interface Aviary {
    type: 'aviary',
    flyingSpeed: number;
}

interface Terrestrial {
    type: 'terrestrial',
    runningSpeed: number,
}

type Animal = Aviary | Terrestrial;

function moveAnimal(animal: Animal) {
    let speed = 0;
    switch (animal.type) {
        case 'aviary':
            speed = animal.flyingSpeed;
            break;
        case 'terrestrial':
            speed = animal.runningSpeed;
    }
    console.log(`Moving at: ${speed}Kph`);
}


moveAnimal({
    type: 'terrestrial',
    runningSpeed: 20,
});
