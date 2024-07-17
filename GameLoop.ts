import { nameToIdObj } from "./AllLevels.js";
import { correctGuess, GuessResults } from "./Guess.js";
import { NineCircle } from "./NineCircle.js";

import promptSync from 'prompt-sync';
const prompt = promptSync();
const game: NineCircle = new NineCircle();

console.log(game.level);

async function guess() {
    let levelName: string = prompt("Guess a level NOW!!! DO IT NOW!!! ", "") as string;

    game.guessLevel(levelName).then(
        (result) => {
            console.log(result);
            if (correctGuess !== result) {
                guess();
            }
        }
    );
}

guess();