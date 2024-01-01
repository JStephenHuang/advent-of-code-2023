const fs = require("fs");
const games = fs.readFileSync("d2.txt").toString().split("\n");

// const game = "Game 1: 2 blue, 4 red; 1 red, 1 green, 6 blue; 2 green";
const game =
  "Game 100: 7 red, 11 blue; 10 red, 5 blue, 1 green; 7 red, 1 green, 13 blue; 9 red; 9 red, 19 blue; 9 red, 9 blue";

const getPowerOfFewestNumberOfCube = (game) => {
  const subsets = game.split(":")[1].trim().split(";");
  const fewestCubeMap = {};

  for (let i = 0; i < subsets.length; i++) {
    const cubes = subsets[i].split(",");
    for (let j = 0; j < cubes.length; j++) {
      const cubeQtyColor = cubes[j].trim().split(" ");
      const color = cubeQtyColor[1];
      const qty = cubeQtyColor[0];

      if (color in fewestCubeMap) {
        fewestCubeMap[color].push(qty);
      } else {
        fewestCubeMap[color] = [qty];
      }

      // could be done better
    }
  }

  let power = 1;
  for (const key in fewestCubeMap) {
    const ascendingList = fewestCubeMap[key].sort((a, b) => a - b);
    console.log(ascendingList);

    power *= ascendingList[ascendingList.length - 1];
  }

  return power;
};

let sum = 0;

for (let i = 0; i < games.length; i++) {
  sum += getPowerOfFewestNumberOfCube(games[i]);
}

console.log(sum);

// 23938
// 11027
// 21327
// 18788
// 78375
