'use strict';

var assert = require('assert');
var mocha = require('mocha');

var describe = mocha.describe;
var before = mocha.before;
var it = mocha.it;

var reductions = require('./');

var coll = [1, 2, 3, 4, 5];

var expect = [1, 3, 6, 10, 15];

function add(a, b) {
  return a + b;
}

describe('reductions', () => {
  let arr;
  before(() => {
    arr = reductions(coll, add);
  });

  it('should return an array of values', () => {
    assert(Array.isArray(arr));
  });

  it('should run an fn across each value', () => {
    assert.deepEqual(arr, expect);
  });

  it('should accept an initializer', () => {
    const arr = reductions(coll, add, 2);
    assert.equal(arr[0], 2);
    assert.deepEqual(arr, [2, 3, 5, 8, 12, 17]);
  });
});
