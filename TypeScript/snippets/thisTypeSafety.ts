class Animal {
    #name: string;
    constructor(theName: string) {
      this.#name = theName;
    }

    getName(this: Animal): string {
        return this.#name;
    }
  }

  const cat = new Animal("Cat");


const catCopy = { getName: cat.getName };

catCopy.getName();
