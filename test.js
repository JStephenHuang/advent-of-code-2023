const letterToDigit = {
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

const line = "7ninesevenineseven";
// const line = "";

const getLetterDigits = (line) => {
  const digits = [];
  for (const key in letterToDigit) {
    if (line.includes(key)) {
      let i = -1;
      while ((i = line.indexOf(key, i + 1)) !== -1) {
        digits.push({ value: letterToDigit[key], index: line.indexOf(key, i) });
      }
    }
  }
  digits.sort((a, b) => a.index - b.index);

  return digits;
};

// console.log(getLetterDigits(line));

// const getLetterDigits = (line) => {
//   const digits = [];
//   for (const key in letterToDigit) {
//     if (line.includes(key)) {
//       digits.push({ value: letterToDigit[key], index: line.indexOf(key) });
//     }
//   }
//   if (digits.length === 0) return {};

//   digits.sort((a, b) => a.index - b.index);

//   console.log(digits);
//   const firstLetterDigit = digits[0];
//   const lastLetterDigit = digits[digits.length - 1];

//   return { firstLetterDigit, lastLetterDigit };
// };

// const { firstLetterDigit, lastLetterDigit } = getLetterDigits(line);

// if (firstLetterDigit === undefined) console.log(true);

// const digits = "one two three four five six seven eight nine".split(" ");

// const re = new RegExp(digits.join("|"), "gi");

// console.log(
//   [...line.matchAll(re)].map((a) => [{ value: a[0], index: a.index }])
// );

// console.log(line.match(re));

// const getLetterDigits2 = (line) => {
//   const digits = line.match(re);
//   if (digits === null) return {};

//   const firstLetterDigit = {
//     value: letterToDigit[digits[0]],
//     index: line.indexOf(digits[0]),
//   };
//   const lastLetterDigit = {
//     value: letterToDigit[digits[digits.length - 1]],
//     index: line.indexOf(digits[digits.length - 1]),
//   };
// };

// const map = {};

// map["blue"] = 2;

// map["blue"] = 5;

// console.log(map);

const re = new RegExp(/\*|\/|&|%|=|-|#/g);
const re2 = new RegExp(/\d+/g);

const line2 =
  "..../..*963.................=......*..860........#...%.........*....53...../.......#......-......52.................&....347........428*522.";

console.log(
  line2.split(".").filter((element) => element !== "" && element !== "/")
);

console.log([...line2.matchAll(re)].map((value) => value));

const deconstructedLine = [...line2.matchAll(re2)].map((value) => {
  const listOfIndex = [];
  for (let i = -1; i <= value[0].length; i++) {
    listOfIndex.push(value.index + i);
  }
  return { value: value[0], index: listOfIndex };
});

console.log(deconstructedLine);

// for (let i = 1; i < 140; i += 32) {
//   console.log(i);
// }
