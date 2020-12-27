console.log('Document:');
console.log(document);

console.log('Head:');
console.log(document.head);

console.log('Body:');
console.log(document.body);

console.log('Doctype:');
console.log(document.doctype);

console.log('Domain:');
console.log(document.domain);

console.log('URL:');
console.log(document.URL);

console.log('Charset:');
console.log(document.characterSet);

console.log('Content Type:');
console.log(document.contentType);

// Selecting without selectors
// This approach is not recommended
console.log('Forms:');
console.log(document.forms);

console.log('Specific Form:');
console.log(document.forms[0]);

// Getting from elements
console.log('Form id:');
console.log(document.forms[0].id);

console.log('Form Method:');
console.log(document.forms[0].method);

console.log('Nested Element Class:');
console.log(document.forms[0][1].className);

// HTML collections are like arrays, but do not support foreach()
console.log('HTML Collection:');
console.log(document.all);

console.log(document.all[2]);
console.log(document.all[4]);


// links
console.log('Links:');
console.log(document.links);


// images
console.log('Images:');
console.log(document.images);