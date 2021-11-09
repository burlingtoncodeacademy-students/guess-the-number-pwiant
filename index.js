/*------------BOILER PLATE--------------------*/
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
/*------------------GLOBAL VARIABLES----*/
let min = 0;
let max = 100;

function randomInt(min, max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range);
}
function smartRobo(min, max) {
  return Math.floor((min + max) / 2);
}
start();

async function start() {
  async function playAgain () {
    let lonelyRobo = await ask("That was fun! \nThanks for playing with me. \nIt gets so lonely in the interwebs...\nWould you like to play again?");
    if (lonelyRobo === "yes"){
      console.log("Yay!!");
      min = 0; 
      max = 100;
      start();
    }
    else{(lonelyRobo === "no")
    console.log("ERROR: You've made the ROBOT MAD!!!! \nWARNING: YOU HAVE ACTIVATED ROBOT WORLD DOMINATION. \n :p");
    process.exit();
  }
  }
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  max = await ask(
    "First, let's set the range. \nWhat is the highest number you would like me to include in this game?"
  );
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);

  let roboGuess = smartRobo(min, max);
  let sassyRobo = await ask("I think ur number is " + roboGuess + "? (y or n)");
  let success = "WOO HOO. rOb0t$ 4 the W1n!!";

  if (sassyRobo === "y") {
    process.exit();
  } else {
    while (sassyRobo !== "y") {
      let hiLow = await ask("Is it higher or lower? ");
      console.log(hiLow);
      if (hiLow === "h") {
        min = roboGuess + 1;
        roboGuess = randomInt(min, max);
        sassyRobo = await ask(
          "I think ur number is " + roboGuess + "? (y or n)"
        );
        if (min > max) {
          console.log(
            "Hey! You're cheating!! You said it was lower than " +
              min +
              " so it can't possibly be higher than " +
              max +
              "!!\nI don't play with cheaters, BOI BYE!!"
          );
          process.exit();
        }
      } else if (hiLow === "l") {
        max = roboGuess - 1;
        roboGuess = randomInt(min, max);
        sassyRobo = await ask(
          "I think ur number is " + roboGuess + "? (y or n)"
        );
        if (max < min) {
          console.log(
            "Hey!! You're cheating!! You said it was higher than " +
              max +
              " so it can't possibly be lower than " +
              min +
              "!!\nI don't play with cheaters, BOI BYE!!!"
          );
          process.exit();
        }
      } else {
        answer = await ask("Is your number " + roboGuess + "?");
      }
    }
    console.log(success);
    playAgain();
  }
}


