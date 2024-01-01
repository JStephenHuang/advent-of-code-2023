const fs = require("fs");
const schematic = fs.readFileSync("d03.txt").toString().split("\n");

const re = new RegExp(/\*|\+|\/|&|%|=|-|#|\$|@/g);
const re2 = new RegExp(/\d+/g);

const getSumOfPartNumbersOfAline = (topLine, middleLine, bottomLine) => {
  const partNumbers = [];
  const indexOfSymbolsInTop = [...topLine.matchAll(re)].map((matchedValues) => {
    return matchedValues.index;
  });
  const indexOfSymbolsInMiddle = [...middleLine.matchAll(re)].map(
    (matchedValues) => {
      return matchedValues.index;
    }
  );
  const indexOfSymbolsInBottom = [...bottomLine.matchAll(re)].map(
    (matchedValues) => {
      return matchedValues.index;
    }
  );

  const indexOfNumbers = [...middleLine.matchAll(re2)].map((value) => {
    const listOfIndex = [];
    for (let i = -1; i <= value[0].length; i++) {
      listOfIndex.push(value.index + i);
    }
    return { value: value[0], indexes: listOfIndex };
  });

  for (let i = 0; i < indexOfNumbers.length; i++) {
    if (
      indexOfNumbers[i].indexes.some(
        (index) =>
          indexOfSymbolsInTop.includes(index) ||
          indexOfSymbolsInMiddle.includes(index) ||
          indexOfSymbolsInBottom.includes(index)
      )
    ) {
      partNumbers.push(indexOfNumbers[i].value);
    }
  }

  return partNumbers.reduce(
    (sum, currentValue) => Number(sum) + Number(currentValue)
  );
};

let sum = 0;

for (let i = 0; i < schematic.length; i++) {
  console.log(i);
  const topLine = i === 0 ? "" : schematic[i - 1];
  const middleLine = schematic[i];
  const bottomLine = i === schematic.length - 1 ? "" : schematic[i + 1];

  sum += getSumOfPartNumbersOfAline(topLine, middleLine, bottomLine);
}

console.log(sum);
