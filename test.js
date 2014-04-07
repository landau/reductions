'use strict';

var assert = require('assert');
var reductions = require('./');
var is = require('is-predicate');

var coll = [1, 2, 3, 4, 5];

var expect = [1, 3, 6, 10, 15];

function add(a, b) {
  return a + b;
}

describe('reductions', function() {
  before(function() {
    this.arr = reductions(coll, add);
  });

  it('should return an array of values', function() {
    assert(is.array(this.arr));
  });

  it('should run an fn across each value', function() {
    assert.deepEqual(this.arr, expect);
  });

  it('should allow an initial value', function() {
    var arr = reductions(coll, add, 2);
    assert.equal(arr[0], 2);
    assert.deepEqual(arr, [2, 3, 5, 8, 12, 17]);
  });
});
