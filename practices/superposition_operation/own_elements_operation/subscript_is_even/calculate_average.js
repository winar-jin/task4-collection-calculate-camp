'use strict';
var calculate_average = function (collection) {
  let evenArr = collection.filter(ele => ele % 2 === 0);
  return evenArr.reduce((pre, curr) => pre + curr) / evenArr.length;
};
module.exports = calculate_average;
