'use strict';

function compute_chain_median(collection) {
  let numbers = collection.split('->');
  numbers = numbers.map(ele => parseInt(ele, 10)).sort((a, b) => a - b);
  let length = numbers.length;
  return length % 2 === 0 ?
    (numbers[length / 2] + numbers[length / 2 - 1]) / 2 :
    numbers[Math.floor(length / 2)];
}

module.exports = compute_chain_median;
