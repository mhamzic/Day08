// Only change code below this line

function convertToInt(str, radix) {
  var str;
  var radix = 16;
  return parseInt(str, radix);
}

console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));

// Only change code above this line

module.exports = convertToInt;
