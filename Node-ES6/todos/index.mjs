'use strict';

import dotenv from 'dotenv';
import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import { inMemoryDb as db} from './db/index.mjs';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(morgan('dev'));

app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
    };

    db.push(newTodo);

    res.json(newTodo);
});

app.get('/todo', (req, res) => {
    res.json(db);
});

app.get('/', (req, res) => {
    res.end('My Todos');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
