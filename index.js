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
  return Math.floor((min + max) / 2)

}
start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  max = await ask(
    "First, let's set the range. \nWhat is the highest number you would like me to include in this game?"
  )
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);

  let roboGuess = smartRobo(min, max);
  let sassyRobo = await ask("I think ur number is " + roboGuess + "? (y or n)");
  let success = "WOO HOO. rOb0t$ 4 the W1n!!";
  let tries = 0; 
  
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
          "I think ur number is " + roboGuess + "? (y or n)")
          if (tries >= 7){
            console.log("Oh man, humans win again :'(")
            process.exit()
          }
          tries++;
        ;
      } else if (hiLow === "l") {
        max = roboGuess - 1;
        roboGuess = randomInt(min, max);
        sassyRobo = await ask(
          "I think ur number is " + roboGuess + "? (y or n)"
        );
        if (tries >= 7){
          console.log("Oh man, humans win again :'(")
          process.exit()
        }
        tries++;
      } else {
        answer = await ask("Is your number " + roboGuess + "?");
        tries++;
        if (tries >= 7){
          console.log("Oh man, humans win again :'(")
          process.exit()
        }
      }
    }
    console.log(success);
 
  }

}