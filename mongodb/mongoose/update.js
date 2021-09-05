'use strict';

const mongoose = require('mongoose');
const collectionName = 'moviesApp';

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};

mongoose.connect(`mongodb://localhost:27017/${collectionName}`, options)
.then(() => {
    console.log(`Successfully connected to ${collectionName} database!`);
})
.catch(err => `Connection Failed! ${err}`);

// First we define a schema
const movieSchema = new mongoose.Schema({
    title: String, 
    year: Number, 
    score: Number, 
    rating: String,
});

// Then we create a model from the mongoose schema
// saving our newfound model as a class. 
const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    { title: 'Iron Man', year: 2008, score: 7.2, rating: 'PG-13' },
    { title: 'Hulk', year: 2003, score: 5.2, rating: 'PG-13' },
    { title: 'Thor Ragnarok', year: 2017, score: 10, rating: 'PG-13' },
    { title: 'Doctor Strange', year: 2016, score: 4, rating: 'PG-13' },
    { title: 'Guardians of The Galaxy', year: 2016, score: 10, rating: 'PG-13' },
    { title: 'Joker', year: 2019, score: 10, rating: '15' },
    { title: 'Avengers Endgame', year: 2019, score: 10, rating: 'PG-13' },
    { title: 'The Matrix', year: 1999, score: 9.2, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
])
.then(data => console.log('Insert Successful!'))
.catch(err => console.log(err));

// We can update existing models, 
// it is worth noting that when we update and existing
// model the updated item is not returned.
// We instead receive an object with a modified count and
// upserted id
Movie.updateOne({title: 'Guardians of The Galaxy'}, {title: 'Guardians of The Galaxy Vol. 2'})
.then(res => console.log(res));

// We can also update multiple items at once
Movie.updateMany(
    {
        title: {
            $in: ['The Matrix', 'Doctor Strange'],
        }
    },
    {
        score: 10,
    }
)
.then(res => console.log(res));

// We also have many findByAndUpdate methods for updating specific items

// Model methods will return the object 
Movie.findOneAndUpdate({ title: 'Hulk' }, { score: 7.0, rating: 'R' })
.then(m => console.log(m));

// If we wish to return the model after the update was applied we must also pass the new
// flag set to true.
Movie.findOneAndUpdate({ title: 'Hulk' }, {score: 9.0, rating: 'R'}, {new: true})
.then(m => console.log(m));
