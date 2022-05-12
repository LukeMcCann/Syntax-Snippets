import isArray from 'lodash/isArray';

export default arr => 0 < arr.filter(item => isArray(item)).length;
