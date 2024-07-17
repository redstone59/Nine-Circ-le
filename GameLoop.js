import { correctGuess } from "./Guess.js";
import { NineCircle } from "./NineCircle.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();
const game = new NineCircle();
console.log(game.level);
async function guess() {
    let levelName = prompt("Guess a level NOW!!! DO IT NOW!!! ", "");
    game.guessLevel(levelName).then((result) => {
        console.log(result);
        if (correctGuess !== result) {
            guess();
        }
    });
}
guess();
