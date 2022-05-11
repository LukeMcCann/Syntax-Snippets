// let value = [1, 2, 3, 4, 5, 6];

// let value = ["value1", "value2", "value3", "value4", "value5", "value6"];

// let value = ["value1", ["value2", "value3"], "value4", "value5", "value6", "value7", "value8"];

let value = { "test": [{"key1": "val1"}]}

// let value = [1, [2, 3], 4, 5, 6];

// let value = ["value1", "value2"]

// let value = [1, [2, [3]], 4, 5, 6, 7, 8 ,9];

const isObject = value => Array.isArray(value) && 'undefined' === value.length;
const isMultidimensionalArray = arr => 0 < (arr.filter(item => Array.isArray(item)).length);

const renderOptionalCustomFieldValue = (value, strEmptyText = '-') => {
  if (value === ('undefined' || null)) {
    return strEmptyText;
  }

  if ('string' === typeof value) {
    return value;
  }

  if ('number' === typeof value) {
    return value.toString();
  }

  if (isObject(value)) {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
     const originalFlatLength = (value.filter(item => !Array.isArray(item))).length;
     if (!isMultidimensionalArray(value)) {
       return `[${value.splice(0, 5).join(', ')}...]`;
     }

     const filteredValues = value.filter(item => !Array.isArray(item));
     const itemsRemoved = JSON.stringify(filteredValues) !== JSON.stringify(value);
     const reducedValues = filteredValues.splice(0, 5);
     if (itemsRemoved) {
       if (originalFlatLength > reducedValues.length) {
        return `[${reducedValues.join(', ').concat('... [...]')}]`;
       }
       return `[${reducedValues.join(', ').concat(', [...]')}]`;
     }
  }

  return JSON.stringify(value);
};


console.log(isObject(value))
