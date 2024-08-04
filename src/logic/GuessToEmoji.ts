import { GuessResult, RelativeGuess } from "./Guess";

const upArrow: string = "\u{1F53C}"; // :arrow_up_small:
const downArrow: string = "\u{1F53D}"; // :arrow_down_small:
const checkmark: string = "\u{2705}"; // :white_check_mark:
const crossmark: string = "\u{274C}"; // :x:

function relativeToEmoji(relative: RelativeGuess): string {
  switch (relative) {
    case RelativeGuess.CORRECT:
      return checkmark;
    case RelativeGuess.HIGHER:
      return upArrow;
    case RelativeGuess.LOWER:
      return downArrow;
  }
}

function guessToEmoji(guessResults: GuessResult): string {
  let resultant: string = "";

  // Could probably roll this up into a loop
  resultant += relativeToEmoji(guessResults.difficulty);
  resultant += guessResults.colourScheme[0] ? checkmark : crossmark;
  resultant += guessResults.colourScheme[1] ? checkmark : crossmark;
  resultant += relativeToEmoji(guessResults.objectCount);
  resultant += relativeToEmoji(guessResults.length);
  resultant += relativeToEmoji(guessResults.downloads);
  resultant += relativeToEmoji(guessResults.likes);

  return resultant;
}

export { guessToEmoji };
