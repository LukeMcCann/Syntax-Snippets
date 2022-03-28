'use strict';

const fs = require('fs');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
        return console.err(err);
    }

    if (contents === '') {
        contents = 'The file is empty';
    } else {
        contents = 'Weeeeeee!';
    }

    fs.writeFile(filepath, contents, (err) => {
        if (err) {
            console.err(err);
        }
    });
});
