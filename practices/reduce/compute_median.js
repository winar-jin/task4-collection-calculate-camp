'use strict';

function compute_median(collection) {
  let numbers = collection.sort((a, b) => a - b);
  let length = numbers.length;
  return length % 2 === 0 ?
    (numbers[length / 2] + numbers[length / 2 - 1]) / 2 :
    numbers[Math.floor(length / 2)];
}

module.exports = compute_median;
