import { allLevels, nameToIdObj } from "./AllLevels.js";
import { difficultyRanks, lengthRanks } from "./NineCirclesLevel.js";
import { RelativeGuess } from "./Guess.js";
import * as gd from "gj-boomlings-api";
function evaluateColours(guessed, correct) {
    if ((guessed === correct) || (guessed.reverse() === correct)) {
        return [true, true];
    }
    let firstColourIndex = correct.indexOf(guessed[0]);
    let secondColourIndex;
    if (firstColourIndex === -1) {
        secondColourIndex = correct.indexOf(guessed[1]);
    }
    else {
        let otherIndex = firstColourIndex === 0 ? 1 : 0;
        if (guessed[1] === correct[otherIndex]) {
            secondColourIndex = otherIndex;
        }
        else {
            secondColourIndex = -1;
        }
    }
    return [firstColourIndex !== -1, secondColourIndex !== -1];
}
function evaluateValues(guessed, correct) {
    if (guessed === correct) {
        return RelativeGuess.CORRECT;
    }
    return guessed > correct ? RelativeGuess.LOWER : RelativeGuess.HIGHER;
}
function getNineCirclesLevel(levelId) {
    for (var i = 0; i < allLevels.length; i++) {
        if (allLevels[i].levelId === levelId) {
            return allLevels[i];
        }
    }
    throw new Error("Level ID not present.");
}
async function getLevelInformation(levelId) {
    const response = await gd.dlLevel(levelId.toString());
    let ratingType;
    if (response.epic !== false) { // this is so gross
        ratingType = response.epic;
    }
    else {
        ratingType = response.featured ? "Feature" : "Rate";
    }
    return {
        name: response.name,
        description: response.description,
        difficulty: response.difficulty,
        stars: response.stars,
        length: response.length,
        downloads: response.downloads,
        likes: response.likes,
        objectCount: response.objects,
        ratingType: ratingType
    };
}
class NineCircle {
    constructor() {
        this.level = allLevels[Math.floor(Math.random() * allLevels.length)];
        getLevelInformation(this.level.levelId).then((value) => this.information = value); // ew
    }
    async guessLevel(levelName) {
        if (!(levelName in nameToIdObj)) {
            throw new TypeError("Level " + levelName + " is not in the level list.");
        }
        let levelId = nameToIdObj[levelName];
        let guessedInformation = await getLevelInformation(levelId);
        return this.getLevelResults(getNineCirclesLevel(levelId), guessedInformation);
    }
    getLevelResults(non_api, api) {
        return {
            colourScheme: evaluateColours(non_api.colourScheme, this.level.colourScheme),
            difficulty: evaluateValues(difficultyRanks.indexOf(api.difficulty), difficultyRanks.indexOf(this.information.difficulty)),
            length: evaluateValues(lengthRanks.indexOf(api.length), lengthRanks.indexOf(this.information.length)),
            downloads: evaluateValues(api.downloads, this.information.downloads),
            likes: evaluateValues(api.likes, this.information.likes),
            objectCount: evaluateValues(api.objectCount, this.information.objectCount)
        };
    }
}
export { NineCircle };
