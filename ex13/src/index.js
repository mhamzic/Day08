// Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomRangeNumber(5, 8));
console.log(randomRangeNumber(8, 20));
console.log(randomRangeNumber(3, 8));
console.log(randomRangeNumber(1, 5));
console.log(randomRangeNumber(7, 10));

// Only change code above this line

module.exports = randomRangeNumber;
