import { correctGuess } from "./Guess";
import { NineCircle } from "./NineCircle";

const game: NineCircle = new NineCircle();

console.log(game.level);

async function guess() {
  const levelName: string = prompt(
    "Guess a level NOW!!! DO IT NOW!!! ",
    ""
  ) as string;

  game.guessLevel(levelName).then((result) => {
    console.log(result);
    if (correctGuess !== result) {
      guess();
    }
  });
}

guess();
