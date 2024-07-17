var RelativeGuess;
(function (RelativeGuess) {
    RelativeGuess[RelativeGuess["CORRECT"] = 0] = "CORRECT";
    RelativeGuess[RelativeGuess["HIGHER"] = 1] = "HIGHER";
    RelativeGuess[RelativeGuess["LOWER"] = 2] = "LOWER";
})(RelativeGuess || (RelativeGuess = {}));
const correctGuess = {
    colourScheme: [true, true],
    difficulty: RelativeGuess.CORRECT,
    length: RelativeGuess.CORRECT,
    downloads: RelativeGuess.CORRECT,
    likes: RelativeGuess.CORRECT,
    objectCount: RelativeGuess.CORRECT,
};
export { RelativeGuess, correctGuess };
