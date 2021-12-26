import express from 'express';

export const app = express();

export const start = async () => {
    app.listen(3000, () => {
        console.log('Listening on: http://localhost:3000');
    });
};
