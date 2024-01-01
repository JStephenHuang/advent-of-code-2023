const fs = require("fs");
const games = fs.readFileSync("d2.txt").toString().split("\n");

const game = "Game 1: 2 blue, 4 red; 1 red, 1 green, 6 blue; 2 green";

const bagMap = {
  blue: 14,
  green: 13,
  red: 12,
};

const getCubeMap = (cubes) => {
  const cubeMap = {};
  for (let j = 0; j < cubes.length; j++) {
    const cubeQtyColor = cubes[j].trim().split(" ");
    cubeMap[cubeQtyColor[1]] = cubeQtyColor[0];
  }
  return cubeMap;
};

const isGamePossible = (game) => {
  let possible = true;

  const subsets = game.split(":")[1].trim().split(";");
  const gameMap = {};

  for (let i = 0; i < subsets.length; i++) {
    const cubes = subsets[i].split(",");
    gameMap[i] = getCubeMap(cubes);
  }

  Object.keys(gameMap).forEach((subsets) => {
    for (const key in gameMap[subsets]) {
      if (gameMap[subsets][key] > bagMap[key]) {
        return (possible = false);
      }
    }
  });
  return possible;
};

let sum = 0;

console.log(games.length);

for (let i = 0; i < games.length; i++) {
  if (isGamePossible(games[i])) {
    console.log(i);

    sum += i + 1;
  }
}

console.log(sum);
