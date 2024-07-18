type PlayerStats = {
    guessCount: number[];    // Used to calculate mean number of guesses
    giveUpCount: number;
    completedGames: number;  // % = 100 * completedGames / (giveUpCount + completedGames)
    lastCompletedGame: Date; // To check if daily streak has broken or not
    currentStreak: number;
}

type GameSettings = {
    hardMode: boolean;   // Removes "higher" or "lower" from guess results
    autoGiveUp: boolean; // Increases difficulty by setting a guess limit
    giveUpAt: number;    // Number of guesses until "give up" button appears
}