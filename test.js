"use strict";

const assert = require("assert");
const mocha = require("mocha");
const reductions = require("./");

const describe = mocha.describe;
const before = mocha.before;
const it = mocha.it;
const coll = [1, 2, 3, 4, 5];
const expect = [1, 3, 6, 10, 15];

function add(a, b) {
  return a + b;
}

describe("reductions", () => {
  let arr;
  before(() => {
    arr = reductions(coll, add);
  });

  it("should return an array of values", () => {
    assert(Array.isArray(arr));
  });

  it("should run an fn across each value", () => {
    assert.deepEqual(arr, expect);
  });

  it("should accept an initializer", () => {
    const arr2 = reductions(coll, add, 2);
    assert.equal(arr2[0], 2);
    assert.deepEqual(arr2, [2, 3, 5, 8, 12, 17]);
  });
});
