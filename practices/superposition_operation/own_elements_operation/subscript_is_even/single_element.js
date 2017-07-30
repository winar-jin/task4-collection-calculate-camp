'use strict';
var grouping_count = require("../../../filter/grouping_count.js");

var single_element = function (collection) {
  const resultArr = collection.filter((_, index) => (index + 1) % 2 === 0);
  const resultObj = grouping_count(resultArr);
  let result = [];
  for (let prop in resultObj) {
    if (resultObj.hasOwnProperty(prop)) {
      if (resultObj[prop] === 1) {
        result.push(parseInt(prop, 10));
      }
    }
  }
  return resultArr.filter(item => result.includes(item) ? true : false);
};
module.exports = single_element;
