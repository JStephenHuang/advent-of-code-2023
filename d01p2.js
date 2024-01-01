const fs = require("fs");
const lines = fs.readFileSync("d1.txt").toString().split("\n");

const re = new RegExp(/^\d+$/);

const letterToDigitMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getSpelledDigits = (line) => {
  const digits = [];
  for (const key in letterToDigitMap) {
    if (line.includes(key)) {
      let i = -1;

      while ((i = line.indexOf(key, i + 1)) !== -1) {
        digits.push({
          value: letterToDigitMap[key],
          index: line.indexOf(key, i),
        });
      }
    }
  }
  digits.sort((a, b) => a.index - b.index);

  return digits;
};

const getCalibrationValFromLine = (line) => {
  let i = 0;
  let j = line.length - 1;

  const digits = getSpelledDigits(line);

  const firstSpelledDigit = digits[0];
  const lastSpelledDigit = digits[digits.length - 1];

  while (!re.test(line[i])) {
    i++;
  }
  while (!re.test(line[j])) {
    j--;
  }

  let firstRealDigit = Number(line[i]);
  let lastRealDigit = Number(line[j]);

  if (
    firstSpelledDigit === undefined ||
    (i === 0 && j === line.length - 1) ||
    line.length < 4
  ) {
    return firstRealDigit * 10 + lastRealDigit;
  }

  if (firstSpelledDigit.index < i) {
    firstRealDigit = firstLetterDigit.value;
  }

  if (lastSpelledDigit.index > j) {
    lastRealDigit = lastSpelledDigit.value;
  }

  return firstRealDigit * 10 + lastRealDigit;
};

let calibrationValue = 0;

var startTime = performance.now();

for (let i = 0; i < lines.length; i++) {
  calibrationValue += getCalibrationValFromLine(lines[i]);
}

var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

console.log(calibrationValue);

// 54547 // regex did not consider merged letter digits e.g. eightwo => would only match ["eight"]
// 54514 // getLetterDigits did not consider multiple occurences of a spelled digit
// 54518 //
