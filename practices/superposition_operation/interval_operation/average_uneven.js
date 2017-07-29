'use strict';

function average_uneven(collection) {
  const unEven = collection.filter(ele => ele % 2 !== 0);
  const total = unEven.reduce((pre, curr) => pre + curr);
  return total / unEven.length;
}

module.exports = average_uneven;
