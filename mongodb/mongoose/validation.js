'use strict';

const mongoose = require('mongoose');
const collectionName = 'shopApp';

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}

mongoose.connect(`mongodb://localhost:27017/${collectionName}`, options)
    .then(() => console.log(`Successfully connected to ${collectionName} database!`))
    .catch(err => `Connection to ${collectionName} database failed! \n ${err}`);

// Using longhand syntax we can set validations on our schemas to ensure that
// certain model fields are required or adhere to any other rules we want to enforce.
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true, 
    }
});

const Product = mongoose.model('Product', productSchema);

// If we try to insert an invalid object we get an error response:
// const bike = new Product({ price: 1200 });
// bike.save()
//     .then(data => console.log(`Successfully Inserted: \n ${data}`))
//     .catch(err => console.log(err));

// It is also important to understand we cannot simply add more values outside
// of the validation schema. If we do it will not error or break the code, it will simply, 
// ignore the additional values upon insertion.
const bike = new Product({ name: 'Mountain Bike', price: 800 });
bike.save()
    .then(data => console.log(`Successfully Inserted: \n ${data}`))
    .catch(err => console.log(err));

// We can apply these same validations when updating objects, they do not apply by default, 
// by setting runValidators to true in our update method call
Product.findOneAndUpdate({ name: 'Mountain Bike'}, { price: 700 }, { new: true }, { runValidators: true })
    .then(p => console.log(p))
    .catch(err => console.log(err));
