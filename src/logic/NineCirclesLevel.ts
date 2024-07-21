enum Colour {
  RED,
  PINK,
  ORANGE,
  BROWN,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  VIOLET,
  CYAN,
  MAGENTA,
  PURPLE,
  BLACK,
  GREY,
  WHITE,
  MULTICOLOUR, // remember to make this a special case (ignore other colours)
  PLAYER_COLOUR_1,
  PLAYER_COLOUR_2,
}

const difficultyRanks: string[] = [
  "Auto",
  "Easy",
  "Normal",
  "Hard",
  "Harder",
  "Insane",
  "Easy Demon",
  "Medium Demon",
  "Hard Demon",
  "Insane Demon",
  "Extreme Demon",
];

const lengthRanks: string[] = ["Short", "Medium", "Long", "XL"];

type Length = "Short" | "Medium" | "Long" | "XL";
type Rating = "Rate" | "Feature" | "Epic" | "Legendary" | "Mythic";

type APIInformation = {
  name: string;
  description: string;
  difficulty: string;
  stars: number;
  length: Length;
  downloads: number;
  likes: number;
  objectCount: number;
  ratingType: Rating;
};

type NineCirclesLevel = {
  // this like all the shit i cant get from the api
  levelId: number;
  colourScheme: [Colour, Colour];
  creators: string[]; // yeah i could get this from the API but then collabs dont work and i wanna credit everyone
  verifier: string | null; // null if a seperate verifier couldn't be found
  //  image: [yanqui this is where you put the react image type]
};

export {
  Colour,
  difficultyRanks,
  lengthRanks,
  type APIInformation,
  type NineCirclesLevel,
  type Length,
  type Rating
};
