'use strict';
var single_element = function (collection) {
  const resultArr = collection.filter((_, index) => (index + 1) % 2 === 0);
  console.log('resultArr: ', resultArr);
  resultArr.forEach((ele, index) => {
    if (resultArr.includes(ele, inedx + 1)) {
      resultArr.filter(item => item !== ele);
    }
  });
  return resultArr;
};
module.exports = single_element;
