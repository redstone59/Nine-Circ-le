import { GuessResults, RelativeGuess } from "../logic/Guess";

export default function GuessResultsView({ result }: { result: GuessResults }) {
  const relativeGuesses = new Map<string, RelativeGuess>();
  relativeGuesses
    .set("Difficulty", result.difficulty)
    .set("Length", result.length)
    .set("Downloads", result.downloads)
    .set("Likes", result.likes)
    .set("Object Count", result.objectCount);

  return (
    <>
      <p>First color: {result.colourScheme[0] ? "CORRECT" : "INCORRECT"}</p>
      <p>Second color: {result.colourScheme[1] ? "CORRECT" : "INCORRECT"}</p>
      {[...relativeGuesses.entries()].map(([k, v]) => {
        let evaluation: string;

        switch (v) {
          case RelativeGuess.CORRECT:
            evaluation = "CORRECT";
            break;
          case RelativeGuess.HIGHER:
            evaluation = "TOO HIGH";
            break;
          case RelativeGuess.LOWER:
            evaluation = "TOO LOW";
            break;
        }

        return (
          <p>
            {k}, {evaluation}
          </p>
        );
      })}
    </>
  );
}
