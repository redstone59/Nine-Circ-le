enum RelativeGuess {
  CORRECT,
  HIGHER,
  LOWER,
}

type GuessResult = {
  colourScheme: [boolean, boolean];
  difficulty: RelativeGuess;
  length: RelativeGuess;
  downloads: RelativeGuess;
  likes: RelativeGuess;
  objectCount: RelativeGuess;
};

function isCorrectGuess(guess: GuessResult): boolean {
  if (
    !guess.colourScheme[0] ||
    guess.colourScheme[0] !== guess.colourScheme[1]
  ) {
    return false;
  }

  // The bottom could be unravelled to be more readable.
  const objectKeys: (keyof GuessResult)[] = [
    "difficulty",
    "length",
    "downloads",
    "likes",
    "objectCount",
  ];

  for (const key of objectKeys) {
    if (guess[key] !== RelativeGuess.CORRECT) {
      return false;
    }
  }

  return true;
}

export { RelativeGuess, type GuessResult, isCorrectGuess };
