'use strict';

require('mocha');

const assert = require('assert');
const removeDuplicate = require('./');

describe('removeDuplicate', function() {
  it('should throw an error if an invalid value is passed', function() {
    assert.throws(() => removeDuplicate(), /expected an array/);
    assert.throws(() => removeDuplicate('random string'), /expected an array/);
    assert.throws(() => removeDuplicate(true), /expected an array/);
    assert.throws(() => removeDuplicate(0), /expected an array/);
    assert.throws(() => removeDuplicate(1, '1'), /Expected an array/);
  });

  it('should return correct results given a valid input', function() {
    assert.deepStrictEqual(removeDuplicate([1, 1]), [1]);
  });
});