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

// This allows us to define instances of the class.
const Endgame = new Movie({
    title: 'Avengers Endgame', 
    year: 2019,
    score: 10, 
    rating: 'PG-13',
});

const Alien = new Movie({
    title: 'Alien', 
    year: 1979,
    score: 8.1, 
    rating: 'R',
});

const TheMatrix = new Movie({
    title: 'The Matrix', 
    year: 1999,
    score: 9.2, 
    rating: 'R',
});

// We can then save this model to the database
Endgame.save();
Alien.save();
TheMatrix.save();

// We can also insert multiple 
// This method takes time, therefore is run
// as an asynchronous function. If we 
// check the value of this function
// we receive a promise which either resolves
// to the raw result from mongo, or the documents
// which passed validation.
Movie.insertMany([
    { title: 'Iron Man', year: 2008, score: 7.2, rating: 'PG-13'},
    { title: 'Hulk', year: 2003, score: 5.2, rating: 'PG-13'},
    { title: 'Thor Ragnarok', year: 2017, score: 10, rating: 'PG-13'},
    { title: 'Doctor Strange', year: 2016, score: 4, rating: 'PG-13'},
    { title: 'Guardians of The Galaxy Vol. 2', year: 2016, score: 10, rating: 'PG-13'},
    { title: 'Joker', year: 2019, score: 10, rating: '15'}
])
.then(data => console.log('Insert Successful!')
    // console.log(data)
)
.catch(err => console.log(err));

// We can use find to retrieve data.
// It should be noted that while we have a then() to
// call upon the response, the response itself is not a promise
// but instead a "thenable" object from the ODM known as a mongoose query.
// If a full fledged promise is needed you can use the exec() function.
 
// All Movies
// Movie.find({}).then(data => console.log(data));

// Movies before 2000
// Movie.find({year: {$lt: 2000}}).then(data => console.log(data));

// Movies after 2000
// Movie.find({year: {$gt: 2000}}).then(data => console.log(data));

// Movie Named Avengers Endgame
Movie.findOne({title: 'Avengers Endgame'}).then(data => console.log(data));

// async function findAllMovies() {
//     return await Movie.find({}).then(data => data);
// };
