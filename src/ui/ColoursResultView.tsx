import { Colour } from "../logic/NineCirclesLevel";
import ColouredBox from "./ColouredBox";
import Icon from "./Icon";
import checkmarkIcon from "../assets/game icons/checkmark.png";
import xIcon from "../assets/game icons/the everything app.png";

type ColourString = keyof typeof Colour;
const colourClasses: { [K in ColourString]: string | undefined } = {
  RED: "red",
  PINK: "pink",
  ORANGE: "orange",
  BROWN: "brown",
  YELLOW: "yellow",
  GREEN: "green",
  BLUE: "blue",
  INDIGO: "indigo",
  VIOLET: "violet",
  CYAN: "cyan",
  MAGENTA: "magenta",
  PURPLE: "purple",
  BLACK: "black",
  GREY: "grey",
  WHITE: "white",
  MULTICOLOUR: undefined,
  PLAYER_COLOUR_1: undefined,
  PLAYER_COLOUR_2: undefined,
};

function BooleanIcon({ bool }: { bool: boolean }) {
  const src = bool ? checkmarkIcon : xIcon;
  const alt = bool ? "Checkmark" : "X";
  return <Icon src={src} alt={alt} />;
}

function ColourResultView({ colourGuess }: { colourGuess: [Colour, boolean] }) {
  let colourName = Colour[colourGuess[0]] as ColourString;
  colourName = (colourName[0].toUpperCase() +
    colourName.slice(1)) as ColourString;

  return (
    <div
      className="flex items-center justify-between gap-1 rounded p-2"
      style={{ backgroundColor: colourClasses[colourName] }}
    >
      <p>{colourName}</p>
      <BooleanIcon bool={colourGuess[1]} />
    </div>
  );
}

export default function ColoursResultView({
  colours,
  coloursResult,
}: {
  colours: [Colour, Colour];
  coloursResult: [boolean, boolean];
}) {
  return (
    <ColouredBox className="flex flex-col">
      <ColourResultView colourGuess={[colours[0], coloursResult[0]]} />
      <ColourResultView colourGuess={[colours[1], coloursResult[1]]} />
    </ColouredBox>
  );
}
