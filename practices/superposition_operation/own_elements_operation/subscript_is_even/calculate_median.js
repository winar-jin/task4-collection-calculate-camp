'use strict';
const compute_median = require('../../../reduce/compute_median');

var calculate_median = function (collection) {
  const evenArr = collection.filter(ele => ele % 2 === 0);
  return compute_median(evenArr);
};
module.exports = calculate_median;
