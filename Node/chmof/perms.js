'use strict';

const fs = require('fs');

const file = process.argv[2];

fs.chmodSync(
    file,
    fs.constants.S_IRUSR |
        fs.constants.S_IWUSR |
        fs.constants.S_IRGRP |
        fs.constants.S_IWGRP |
        fs.constants.S_IROTH
);
