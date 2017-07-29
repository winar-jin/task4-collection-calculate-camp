'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  let shortStart = true;
  if (number_a > number_b) {
    shortStart = false;
    [number_a,number_b] = [number_b,number_a];
  } else if(number_a === number_b) {
    if(number_a % 2 === 0){
      result.push(number_a);
      return result;
    }
  }
  for(let index = number_a; index <= number_b; index++){
    if(index % 2 === 0){
      result.push(index);
    }
  }
  if(!shortStart){
    result.reverse();
  }
  return result;
}

module.exports = get_integer_interval_2;
