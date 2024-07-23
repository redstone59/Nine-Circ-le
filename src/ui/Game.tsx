import { useState } from "react";

import { GuessResults } from "../logic/Guess";
import { NineCircle } from "../logic/NineCircle";
import GuessResultsView from "./GuessResultsView";

const game = new NineCircle();

export default function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState<GuessResults[]>([]);

  return (
    <>
      <form
        onSubmit={async () => {
          setGuesses([await game.guessLevel(guess), ...guesses]);
        }}
      >
        <input
          name="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
        <input type="submit">Submit</input>
      </form>
      {guesses.map((g) => (
        <GuessResultsView result={g} />
      ))}
    </>
  );
}
