// Add a NewProduct to the form upon submission. This should prevent
// the default submission behaviour and then display the product and quantity
// submitted via a text input. 

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    
    const ul = document.querySelector('#list');
    const newProduct = document.createElement('li');
    
    addProduct(productInput.value, quantityInput.value);
    reset(form.elements);
});


const addProduct = (product, quantity) => {
    const ul = document.querySelector('#list');
    const newProduct = document.createElement('li');
    newProduct.append(`${product} - ${quantity}`);
    ul.append(newProduct);

}

const reset = (inputs) => {
    for (let input of inputs) {
        input.value = '';
    }
}

