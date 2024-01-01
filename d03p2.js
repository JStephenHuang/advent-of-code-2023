const fs = require("fs");
const schematic = fs.readFileSync("d03.txt").toString().split("\n");

const re = new RegExp(/\*/g);
const re2 = new RegExp(/\d+/g);

const top =
  "...788.............................54.........501...........555.........270.................................521......893....................";
const middle =
  "..../..*963........................*..860......................*....53...../.....................52.................&....347........428*522.";
const bottom =
  "............*......41..481+.......462....$..187......678.......420....-....................&115.+...........................+...............";

const getGearRatios = (topLine, middleLine, bottomLine) => {
  const indexOfGears = [...middleLine.matchAll(re)].map((value) => value.index);

  const indexOfNumbers = [...middleLine.matchAll(re2)].map((value) => {
    const listOfIndex = [];
    for (let i = -1; i <= value[0].length; i++) {
      listOfIndex.push(value.index + i);
    }
    return { value: value[0], indexes: listOfIndex };
  });
};


