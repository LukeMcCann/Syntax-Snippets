'use strict';

const mongoose = require('mongoose');
const collectionName = 'moviesApp';

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
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

const UP = new Movie(
    {
        title: 'UP',
        year: 2009,
        score: 8.2,
        rating: 'U',
    }
);

UP.save();

// Finally, we can delete models, note that just like update, the object deleted is
// not returned, just the count of the deleted objects. 
// Movie.remove({ title: 'UP' }).then(res => console.log(res));

// Remove is deprecated in later versions of mongo and we should use deleteOne or deleteMany
// instead.
Movie.deleteOne({ rating: 'U' }).then(res => console.log(res));

// We also have find methods like we do for update. This will
// return the actual object we have deleted.
Movie.findOneAndDelete( {title: 'Alien' }).then(m => console.log(m));
