import { add } from './index.mjs';
import assert from 'assert';

console.log('add() : Should add two numbers');
try {
    assert.strictEqual(add(1, 2), 3);
    console.log('SUCCESS');
} catch(err) {
    console.log('FAIL');
    console.log(error(err));
}
