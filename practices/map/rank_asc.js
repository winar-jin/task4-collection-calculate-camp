'use strict';
var rank_asc = function (collection) {
  let result = Array.from(collection);
  return result.sort((a, b) => b - a);
};

module.exports = rank_asc;
