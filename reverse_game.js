/*BOILER PLATE*/
const { getUnpackedSettings } = require("http2");
const { exit } = require("process");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
/*GLOBAL VARIABLES*/
let min = 0;
let max = 50;
let tries = 0;

//FUNCTION TO GENERATE RANDOM INT, BASED ON RANGE//
function randomInt(min, max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range);
}

newGame();
async function newGame() {
  console.log(
    "Let's play a game where I (strong Robot) think of a number and you (puny human) try to guess it."
  );
  console.log(
    "Because humans are weak, I'll try to make it easy for you. \nThe number I think of will be between ZERO and FIFTY."
  );
  let wannaPlay = await ask(
    "Are you sure you want to play? I may crush your frail human ego.\n(yes or no)"
  );
  if (wannaPlay === "yes") {
    console.log(
      "I hope you are a worthy opponent. I haven't had many since Phoebe created me..."
    );
  } else {
    wannaPlay === "no";
    console.log("YOU ARE NOT WORTHY.\nGOOD- \nBYE.");
    process.exit();
  }
  let robitNum = randomInt(min, max);
  console.log(".....\nCALCULATING.....\nCALCULATING...");
  console.log("OK! I'm ready now.");
  let humanGuess = await ask("What number am I thinking of?");
  if (humanGuess === robitNum) {
    console.log(
      "Congratulations, you have defeated a computer.\nDo you feel proud of yourself??"
    );
    console.log(
      "Oh man...\nTimes are tough out here for a gambling man...\nI bet all my bitcoins that you, a puny human couldn't beat me in a game of guessing numbers,\nbut somehow you did :("
    );
    tries++;
    console.log("And it only took you " + tries + " tries...");
    process.exit();
  } else {
    while (humanGuess !== robitNum) {
      if (humanGuess > robitNum) {
        console.log(
          "ERROR: INCORRECT\nTHE CORRECT VALUE IS LOWER THAN " +
            humanGuess +
            "."
        );
        tries++;
        humanGuess = await ask("Guess again?");
      } else if (humanGuess < robitNum) {
        console.log(
          "ERROR: INCORRECT \nTHE CORRECT VALUE IS HIGHER THAN " +
            humanGuess +
            "."
        );
        tries++;
        humanGuess = await ask("Take another gander at my number?");
      } else {
        tries++;
        console.log(
          "Congratulations, you have defeated a computer.\nDo you feel proud of yourself??"
        );
        console.log(
          "Oh man...\n Times are tough out here for a gambling man...\nI bet all my bitcoins that you, a puny human couldn't beat me in a game of guessing numbers,\nbut somehow you did :(\nMy robot friends are bound to make fun of me... \nIt only took you " +
            tries +
            " tries. :'("
        );
        process.exit();
      }
    }
  }
}
