import { allLevels } from "./AllLevels";
import { downloadedAPIInfo } from "./FakeAPIInformation";

type ReadableLevel = {
    name: string;
    publisher: string;
}

let temp: {[key: string]: ReadableLevel} = {};

let key: string;
for (key of Object.keys(allLevels)) {
    temp[key] = {
        name: downloadedAPIInfo[key].name,
        publisher: allLevels[key].creators[0]
    }
}

const idToReadable: typeof temp = temp;

export {
    type ReadableLevel,
    idToReadable
}