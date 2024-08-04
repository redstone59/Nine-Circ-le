import { Colour } from "../logic/NineCirclesLevel";
import checkmarkIcon from "../assets/game icons/checkmark.png";
import xIcon from "../assets/game icons/the everything app.png";

function BooleanIcon({ bool }: { bool: boolean }) {
  const src = bool ? checkmarkIcon : xIcon;
  const alt = bool ? "Checkmark" : "X";
  return <img src={src} alt={alt} />;
}

function ColourResultView({ colourGuess }: { colourGuess: [Colour, boolean] }) {
  let colourName = Colour[colourGuess[0]];
  colourName = colourName[0].toUpperCase() + colourName.slice(1);

  return (
    <div className="flex">
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
    <div className="flex flex-col">
      <ColourResultView colourGuess={[colours[0], coloursResult[0]]} />
      <ColourResultView colourGuess={[colours[1], coloursResult[1]]} />
    </div>
  );
}
