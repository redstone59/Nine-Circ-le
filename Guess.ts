enum RelativeGuess {
    CORRECT,
    HIGHER,
    LOWER
}

type GuessResults = {
    colourScheme: [boolean, boolean];
    difficulty: RelativeGuess;
    length: RelativeGuess;
    downloads: RelativeGuess;
    likes: RelativeGuess;
    objectCount: RelativeGuess;
}

const correctGuess: GuessResults = {
    colourScheme: [true, true],
    difficulty: RelativeGuess.CORRECT,
    length: RelativeGuess.CORRECT,
    downloads: RelativeGuess.CORRECT,
    likes: RelativeGuess.CORRECT,
    objectCount: RelativeGuess.CORRECT,   
}

export { RelativeGuess, GuessResults, correctGuess }