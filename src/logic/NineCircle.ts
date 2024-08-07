import { allLevels, nameToIdObj } from "./AllLevels";
import {
  NineCirclesLevel,
  difficultyRanks,
  lengthRanks,
  APIInformation,
  Colour,
} from "./NineCirclesLevel";
import { GuessResult, RelativeGuess } from "./Guess";
import { levelToday } from "./RandomisedLevels";
import { 
  ReadableLevel, 
  idFromReadable
} from "./ReadableLevel";
import * as api from "./FakeAPI";

function evaluateColours(
  guessed: [Colour, Colour],
  correct: [Colour, Colour]
): [boolean, boolean] {
  if (guessed === correct || guessed.reverse() === correct) {
    return [true, true];
  }

  const firstColourIndex: number = correct.indexOf(guessed[0]);
  let secondColourIndex: number;
  if (firstColourIndex === -1) {
    secondColourIndex = correct.indexOf(guessed[1]);
  } else {
    const otherIndex: number = firstColourIndex === 0 ? 1 : 0;
    if (guessed[1] === correct[otherIndex]) {
      secondColourIndex = otherIndex;
    } else {
      secondColourIndex = -1;
    }
  }

  return [firstColourIndex !== -1, secondColourIndex !== -1];
}

function evaluateValues(guessed: number, correct: number): RelativeGuess {
  if (guessed === correct) {
    return RelativeGuess.CORRECT;
  }
  return guessed < correct ? RelativeGuess.LOWER : RelativeGuess.HIGHER;
}

function getNineCirclesLevel(levelId: number): NineCirclesLevel {
  if (!(levelId.toString() in allLevels)) {
    throw new Error("Level ID not present in saved levels.");
  }

  return allLevels[levelId.toString()];
}

function getLevelInformation(levelId: number): APIInformation {
  return api.dlLevel(levelId);
}

class NineCircle {
  level: NineCirclesLevel;
  information: APIInformation;

  constructor() {
    const randomLevelId = nameToIdObj[levelToday];

    this.level = allLevels[randomLevelId];
    this.information = getLevelInformation(randomLevelId);
  }

  async guessLevel(levelName: string): Promise<GuessResult> {
    if (!(levelName in nameToIdObj)) {
      throw new TypeError("Level " + levelName + " is not in the level list.");
    }

    const levelId: number = nameToIdObj[levelName];
    const guessedInformation: APIInformation = getLevelInformation(levelId);

    return this.getLevelResults(
      getNineCirclesLevel(levelId),
      guessedInformation
    );
  }

  async guessReadableLevel(level: ReadableLevel): Promise<GuessResult> {
    const id: number = idFromReadable(level);
    if (id === -1) {
      throw new TypeError(
        "Level " + level.name + " by " + level.publisher + " is not in the level list."
        );
    }

    const guessedInformation: APIInformation = getLevelInformation(id);

    return this.getLevelResults(
      getNineCirclesLevel(id),
      guessedInformation
    )
  }

  private getLevelResults(
    non_api: NineCirclesLevel,
    api: APIInformation
  ): GuessResult {
    return {
      colourScheme: evaluateColours(
        non_api.colourScheme,
        this.level.colourScheme
      ),
      difficulty: evaluateValues(
        difficultyRanks.indexOf(api.difficulty),
        difficultyRanks.indexOf(this.information.difficulty)
      ),
      length: evaluateValues(
        lengthRanks.indexOf(api.length),
        lengthRanks.indexOf(this.information.length)
      ),
      downloads: evaluateValues(api.downloads, this.information.downloads),
      likes: evaluateValues(api.likes, this.information.likes),
      objectCount: evaluateValues(
        api.objectCount,
        this.information.objectCount
      ),
    };
  }
}

export { NineCircle };
