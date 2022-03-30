'use strict';

const fs = require('fs');

const file = process.argv[2];

fs.chmodSync(file, 0o64);
