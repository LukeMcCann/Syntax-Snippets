// generic object
const cat: object = {
    name: 'Tammy',
    age: 5,
}

console.log(cat.sound);

// Person with types
const person: {
    name: string,
    age: number,
    nickname: string,
} = {
    name: 'Luke',
    age: 30,
    nickname: 'Newt',
};

// Nested Object Type
const product: {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string,
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

console.log(person.nickname);
