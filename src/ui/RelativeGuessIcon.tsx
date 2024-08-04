import { RelativeGuess } from "../logic/Guess";
import checkmarkIcon from "../assets/game icons/checkmark.png";
import clsx from "clsx";
import relativeArrowIcon from "../assets/game icons/relative arrow.png";

export function RelativeGuessIcon({
  className,
  guess,
}: {
  className?: string;
  guess: RelativeGuess;
}) {
  let alt: string;
  switch (guess) {
    case RelativeGuess.CORRECT:
      alt = "Correct";
      break;
    case RelativeGuess.HIGHER:
      alt = "Higher";
      break;
    case RelativeGuess.LOWER:
      alt = "Lower";
      break;
  }
  return (
    <img
      className={clsx(
        className,
        guess == RelativeGuess.HIGHER && "scale-y-[-1]",
      )}
      src={guess == RelativeGuess.CORRECT ? checkmarkIcon : relativeArrowIcon}
      alt={alt}
    />
  );
}
