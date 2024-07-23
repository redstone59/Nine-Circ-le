import { SeedableRNG } from "./SeedableRNG";
import { nameToIdObj } from "./AllLevels";

function daysSinceNewYear(): number {
    const currentDate: Date = new Date();
    const newYear: Date = new Date(currentDate.getFullYear(), 0, 1);
    return Math.floor((currentDate.valueOf() - newYear.valueOf() + 1) / (24 * 60 * 60 * 1000));
}

function shuffle<Type>(array: Type[]): Type[] {
    const dateLoaded: Date = new Date();
    // How the seed is chosen does mean 17 levels get missed every 6 months. Oh well.
    const seed: number = dateLoaded.getFullYear() + (dateLoaded.getMonth() >= 5 ? 1e5 : 0);
    const rng: SeedableRNG = new SeedableRNG(seed);
    
    let itemsRemaining: Type[] = array;
    let shuffledList: Type[] = [];

    while (itemsRemaining.length > 0) {
        const randomIndex = rng.next() % itemsRemaining.length;
        const value = itemsRemaining.splice(randomIndex, 1); // Remove item at the index.
        shuffledList = shuffledList.concat(value);
    }

    return shuffledList;
}

const levelNames: string[] = Object.keys(nameToIdObj);

const levelToday: string = shuffle(levelNames)[daysSinceNewYear() % 183]

export { levelToday }
