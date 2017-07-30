'use strict';
var even_asc_odd_desc = function (collection) {
  const evenArr = collection.filter(ele => ele % 2 === 0);
  const oddArr = collection.filter(ele => ele % 2 !== 0);
  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => b - a);
  return evenArr.concat(oddArr);
};
module.exports = even_asc_odd_desc;
