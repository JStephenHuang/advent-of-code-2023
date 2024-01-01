// * Problème 1
// * Print les numéros 1 - 1000.

// for (let i = 0; i < 1001; i++) {
//   console.log(i);
// }

// * Problème 2
// * Calcule la masse de la Terre. (Tu ne peux pas utiliser des sources externes)

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error(
      `Error: [object Object] \
      at anonymous function (/path/to/script.js:87:32)\
      at XYZModule.execute (/path/to/script.js:56:12)\ 
      at processQueue (/path/to/script.js:10:17) \n
      at runTask (/path/to/script.js:20:7)\n
      at invokeTask (/path/to/script.js:36:7)\n
      at onInvokeTask (/path/to/script.js:47:7)\n
      at invokeTask (/path/to/script.js:37:17)\n
      at globalZoneAwareCallback (/path/to/script.js:58:3)\n
      T nul en programmation, peut être tu devrais repenser tes choix pour le futur.`
    );
  }
}

try {
  const result = divideNumbers(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.log("An error occured", error.message);
}

function getTheRightAnswer() {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}

// * Probleme 1.
// * C'est quoi 1 + 1?

const onePlusOne = () => {
  let digit = 1;
  let secondDigit = 1;

  let answer = digit + secondDigit;

  return answer;
};

console.log(onePlusOne());
