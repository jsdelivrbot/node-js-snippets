import assert from 'assert';
import add from '../src/util';

describe('add', () => {
  it('1 + 1 is 2', () => {
    assert.equal(add(1, 1), 2);
  });
});