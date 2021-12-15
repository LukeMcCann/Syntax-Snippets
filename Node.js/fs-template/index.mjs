'use strict';

import { readFile } from 'fs/promises';

let template = await readFile(new URL('index.html', import.meta.url), 'UTF-8');

// console.log(template.toString()); -- remove UTF-8 and uncomment
// console.log(template);

const data = {
    title: 'Learn Node', 
    body: 'HTML Template Change',
}

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value);
}

console.log(template);
