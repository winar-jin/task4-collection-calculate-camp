function get_letter(number) {
  let result = [];
  if (number % 26 === 0) {
    result.push('z');
    number > 26 ? result.unshift(String.fromCharCode(Math.floor(number / 26) + 95)) : null;
  } else {
    result.push(String.fromCharCode(number % 26 + 96));
    number > 26 ? result.unshift(String.fromCharCode(Math.floor(number / 26) + 96)) : null;
  }
  return result.join('');
}

module.exports = get_letter;
