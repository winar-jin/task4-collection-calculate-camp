'use strict';
var even_group_calculate_average = function (collection) {
  const evenArr = collection.filter(ele => ele % 2 === 0);
  const oneth = evenArr.filter(ele => 1 <= (ele / 1) && (ele / 1) < 9);
  const tenth = evenArr.filter(ele => 1 <= (ele / 10) && (ele / 10) < 9);
  const hundredth = evenArr.filter(ele => 1 <= (ele / 100) && (ele / 100) < 9);
  if (evenArr.length === 0) {
    return [0];
  }
  const oneTotal = oneth.reduce((pre, curr) => pre + curr, 0);
  const oneAve = Math.floor(oneTotal / oneth.length);
  const tenTotal = tenth.reduce((pre, curr) => pre + curr, 0);
  const tenAve = Math.floor(tenTotal / tenth.length);
  const hundredTotal = hundredth.reduce((pre, curr) => pre + curr, 0);
  const hundredAve = Math.floor(hundredTotal / hundredth.length);
  if (oneAve && oneAve > 0 && tenAve && tenAve > 0 && hundredAve && hundredAve > 0) {
    return [oneAve, tenAve, hundredAve];
  }
  if (!oneAve && !tenAve && hundredAve && hundredAve > 0) {
    return [hundredAve];
  }
};
module.exports = even_group_calculate_average;
