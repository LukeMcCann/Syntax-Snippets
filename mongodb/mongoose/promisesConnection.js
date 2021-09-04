'use strict';

const collectionName = 'moviesApp';

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${collectionName}`, options)
.then(() => {
    console.log(`Successfully connected to ${collectionName} database!`);
})
.catch(err => `Connection Failed! ${err}`);
