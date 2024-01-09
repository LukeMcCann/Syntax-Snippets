const omit = (source, fields = []) => {
    const omittedKeys = Object.keys(source).filter(key => !fields.includes(key));
    const mappedObject = omittedKeys.reduce((result, key) => {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
      return result;
    }, {});

    return mappedObject;
}

const res = omit({ test: 'Hello', omission: 'Woo' }, ['omission']);

console.log(res);

// V2
const omit = (source, fields = []) => {
    const omittedKeys = Object.keys(source).filter(key => !fields.includes(key));
    const mappedObject = { ...source };
    omittedKeys.forEach(key => delete mappedObject[key]);
    return mappedObject;
}

const res = omit({ test: 'Hello', omission: 'Woo' }, ['omission']);

console.log(res);

// V2 Pure
const omit = (source, fields = []) => {
    const omittedKeys = new Set(fields);
    const filteredEntries = Object.entries(source).filter(([key]) => !omittedKeys.has(key));
    const mappedObject = Object.fromEntries(filteredEntries);
    return mappedObject;
}

const res = omit({ test: 'Hello', omission: 'Woo' }, ['omission']);

console.log(res);
