class DataStorage<T> {
    private data: T[] = [];

    public addItem(item: T) {
        this.data.push(item);
    }

    public removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    get getItems() : T[] {
        return [...this.data];
    }
}

const textStore = new DataStorage<string>();
textStore.addItem('Sansa Stark');
textStore.addItem('Arya Stark');
textStore.removeItem('Sansa Stark');

console.log(textStore.getItems);


const numberStore = new DataStorage<number>();
numberStore.addItem(1);
numberStore.addItem(200);

console.log(numberStore.getItems);


const objStore = new DataStorage<Object>();
objStore.addItem({ name: 'Renley Baratheon'});

console.log(objStore.getItems);


type Animal = {
    species: string,
    sound: () => void,
}

const animalStore = new DataStorage<Animal>();
animalStore.addItem({ species: 'canid', sound: () => console.log('Woof!') })

console.log(animalStore.getItems);
