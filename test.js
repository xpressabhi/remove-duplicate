'use strict';

require('mocha');

const assert = require('assert');
const removeDuplicate = require('./');

describe('removeDuplicate', function() {
  it('should throw an error if an invalid value is passed', function() {
    assert.throws(() => removeDuplicate(), /Expected Array as input/);
    assert.throws(() => removeDuplicate('random string'), /Expected Array as input/);
    assert.throws(() => removeDuplicate(true), /Expected Array as input/);
    assert.throws(() => removeDuplicate(0), /Expected Array as input/);
    assert.throws(() => removeDuplicate({}), /Expected Array as input/);
  });

  it('should return correct results given a valid input', function() {
    assert.deepStrictEqual(removeDuplicate([1, 1]), [1]);
    assert.deepStrictEqual(removeDuplicate([]), []);
  });
});