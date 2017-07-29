'use strict';

function compute_average(collection) {
  let total = collection.reduce((pre, curr) => pre + curr);
  return total / collection.length;
}

module.exports = compute_average;
