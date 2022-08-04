// In some cases deep merging arrays of objects is necessary.
// This can be rather complex, especially when using React, 
// as you must consider when objects update to avoid
// an infinitely changing state, or a cocatenation of
// duplicate entries. 

// Usually the spread operator or cocatenation works fine
// However in cases where you need a deep merge of objects
// within an array we can do so using lodash.

import values from 'lodash/values';
import merge from 'lodaash/merge';
import keyBy from 'lodash/keyBy';

const arrayOfObjectColumns = [{ 'label': 'column_1' }, { 'label': 'column_2' }];
const arrayOfMergeColumns = [{ 'label': 'column_1' }, { 'label': 'column_3' }];

const mergedColumns = values(merge(
    keyBy(objColumns, 'label'),
    keyBy(mergeColumns, 'label'),
));
