'use strict';

/**
 * Returns an array of intermediate values of the reduction
 * (as per reduce) of coll by fn, starting with init.
 *
 *
 * @param {Array} coll
 * @param {Function} fn
 * @param {*} init
 *
 * @return {Array}
 */
module.exports = function reductions(coll, fn, init) {
  var start = coll[0];

  // Recur to set initial value
  if (init !== undefined) {
    return reductions([init].concat(coll), fn);
  }

  function reduce(acc, v, i) {
    return acc.concat(fn(acc[i], v));
  }

  return coll.slice(1).reduce(reduce, [start]);
};
