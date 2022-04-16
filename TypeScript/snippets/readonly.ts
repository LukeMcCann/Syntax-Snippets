class Person {

    constructor(
        private readonly id: number,
    ) {}

}

// The readonly modified is for properties which are
// not only private but should not change after their
// initialisation.
