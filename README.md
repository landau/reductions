[![Build Status](https://travis-ci.org/landau/reductions.svg)](https://travis-ci.org/landau/reductions)

reductions
==========

Returns an array of intermediate values of the reduction (as per reduce) of coll by fn, starting with init.

```js
function reductions(coll, fn, init) { ... }
```

## Install

`npm i -S reductions`

## Usage

``` js
var assert = require('assert');
var reductions = require('./');

var coll = [1, 2, 3, 4, 5];
var expect = [1, 3, 6, 10, 15];

function add(a, b) {
  return a + b;
}

// Without an initial value
var arr = reductions(coll, add);
assert.deepEqual(arr, expect);

// WITH an initial value
var arr = reductions(coll, add, 2);
assert.deepEqual(arr, [2, 3, 5, 8, 12, 17]);
```
