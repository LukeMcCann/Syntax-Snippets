interface Lengthy {
    length: number,
}

function countAndDescribe<T extends Lengthy> (element: T) : [T, string] {
    let descriptionText = 'No Value!';
    if (element.length > 0) {
        descriptionText = `The element is of length ${element.length}.`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hello'));
