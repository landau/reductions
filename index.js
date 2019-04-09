'use strict';

/**
 * Returns an array of intermediate values of the reduction
 * (as per reduce) of collection by fn, starting with init.
 *
 *
 * @param {Array} collection -
 * @param {Function} fn -
 * @param {*} init -
 *
 * @returns {Array} -
 */
module.exports = function reductions(collection, fn, init) {
  const start = collection[0];

  // Recur to set initial value
  if (init !== undefined) {
    return reductions([init].concat(collection), fn);
  }

  function reduce(acc, v, i) {
    return acc.concat(fn(acc[i], v));
  }

  return collection.slice(1).reduce(reduce, [start]);
};
