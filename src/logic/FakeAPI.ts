import { APIInformation } from "./NineCirclesLevel";
import { downloadedAPIInfo } from "./FakeAPIInformation";

function dlLevel(levelId: number): APIInformation {
    if (levelId.toString() in Object.keys(downloadedAPIInfo)) {
        return downloadedAPIInfo[levelId.toString()];
    }
    throw new RangeError("Level ID not present within downloaded data.")
}

export { dlLevel }