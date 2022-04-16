class Animal {
    #name: string;
    constructor(theName: string) {
      this.#name = theName;
    }

    getName(): string {
        return this.#name;
    }
  }

  const cat = new Animal("Cat");

  console.log(cat.getName());


  cat.#name;
