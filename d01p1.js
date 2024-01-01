const fs = require("fs");
const lines = fs.readFileSync("d1.txt").toString().split("\n");

const re = new RegExp(/^\d+$/);

const getCalibrationValFromLine = (line) => {
  let i = 0;
  let j = line.length;

  while (!re.test(line[i])) {
    i++;
  }
  while (!re.test(line[j])) {
    j--;
  }

  return Number(line[i]) * 10 + Number(line[j]);
};

let calibrationValue = 0;

for (let i = 0; i < lines.length; i++) {
  calibrationValue += getCalibrationValFromLine(lines[i]);
}

console.log(calibrationValue);

// 54331
