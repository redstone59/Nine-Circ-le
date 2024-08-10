import { allLevels, nameToIdObj } from "../logic/AllLevels";

import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import GuessResultView from "./GuessResultView";
import { NineCircle } from "../logic/NineCircle";
import { downloadedAPIInfo } from "../logic/FakeAPIInformation";
import { useState } from "react";

const game = new NineCircle();

export default function Game() {
  const [nameGuess, setNameGuess] = useState("");
  const [guesses, setGuesses] = useState<[FullLevelInfo, GuessResult][]>([]);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const levelId = nameToIdObj[nameGuess].toString();
          const levelInfo: FullLevelInfo = {
            ...downloadedAPIInfo[levelId],
            ...allLevels[levelId],
          };
          const guessResult = await game.guessLevel(nameGuess);
          setGuesses([[levelInfo, guessResult], ...guesses]);
        }}
      >
        <input
          name="guess"
          value={nameGuess}
          onChange={(e) => setNameGuess(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {guesses.map((g) => (
        <GuessResultView info={g[0]} result={g[1]} />
      ))}
    </>
  );
}
