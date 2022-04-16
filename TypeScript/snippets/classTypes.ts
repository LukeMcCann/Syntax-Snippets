class Product {
    title: string;
    price: number;

    constructor(
        title: string,
        price: number,
    ) {
        this.title = title;
        this.price = price;
    }

    getTitle () : string {
        return this.title;
    }

    setTitle (title) : void {
        this.title = title;
    }

    getPrice () : number {
        return this.price;
    }
}


class ShoppingCart {
    contents: Product[];

    constructor(...items) {
        this.contents = items;
    }

    getContents () : Product[] {
        return this.contents;
    }

    addToCart (item) : void {
        this.contents.push(item);
    }
}

const schecterDemon: Product = new Product('Schecter Demon 7', 400);
const schecterEvilTwin: Product = new Product('Schecter Evil Twin C-8', 1800);

const cart: ShoppingCart = new ShoppingCart(schecterDemon);

console.log({ initialCar: cart.getContents() });

cart.addToCart(schecterEvilTwin);

console.log({ endCart: cart.getContents() });
