import { allLevels } from "./AllLevels";
import { downloadedAPIInfo } from "./FakeAPIInformation";

type ReadableLevel = {
    name: string;
    publisher: string;
}

let temp: {[key: string]: ReadableLevel} = {}; // Used to construct idToReadable.

let key: string;
for (key of Object.keys(allLevels)) {
    temp[key] = {
        name: downloadedAPIInfo[key].name,
        publisher: allLevels[key].creators[0]
    }
}

const idToReadable: typeof temp = temp;

function idFromReadable(level: ReadableLevel): number {
    let id: string;
    let readable: ReadableLevel;
    
    for (id of Object.keys(idToReadable)) {
        readable = idToReadable[id];
        if (
            readable.name == level.name &&
            readable.publisher == level.publisher
        ) {
            let potentialId: number = parseInt(id);
            if (isNaN(potentialId)) {
                break; // just so i dont have two `return -1`s
            }
            return potentialId;
        }
    }
    
    return -1;
}

export {
    type ReadableLevel,
    idToReadable,
    idFromReadable
}