import ColouredBox from "./ColouredBox";
import { Difficulty } from "../logic/NineCirclesLevel";
import { RelativeGuess } from "../logic/Guess";
import { RelativeGuessIcon } from "./RelativeGuessIcon";
import autoDifficultyIcon from "../assets/difficulties/auto.png";
import easyDemonDifficultyIcon from "../assets/difficulties/demon easy.png";
import easyDifficultyIcon from "../assets/difficulties/easy.png";
import extremeDemonDifficultyIcon from "../assets/difficulties/demon extreme.png";
import hardDemonDifficultyIcon from "../assets/difficulties/demon hard.png";
import hardDifficultyIcon from "../assets/difficulties/hard.png";
import harderDifficultyIcon from "../assets/difficulties/harder.png";
import insaneDemonDifficultyIcon from "../assets/difficulties/demon insane.png";
import insaneDifficultyIcon from "../assets/difficulties/insane.png";
import mediumDemonDifficultyIcon from "../assets/difficulties/demon medium.png";
import normalDifficultyIcon from "../assets/difficulties/normal.png";
import otherDifficultyIcon from "../assets/difficulties/na.png";

const difficultyIcons: { [Key in Difficulty]: string } = {
  Auto: autoDifficultyIcon,
  Easy: easyDifficultyIcon,
  Normal: normalDifficultyIcon,
  Hard: hardDifficultyIcon,
  Harder: harderDifficultyIcon,
  Insane: insaneDifficultyIcon,
  "Easy Demon": easyDemonDifficultyIcon,
  "Medium Demon": mediumDemonDifficultyIcon,
  "Hard Demon": hardDemonDifficultyIcon,
  "Insane Demon": insaneDemonDifficultyIcon,
  "Extreme Demon": extremeDemonDifficultyIcon,
};
export default function DifficultyResultView({
  guess,
  difficulty,
}: {
  guess: RelativeGuess;
  difficulty: Difficulty;
}) {
  // yanky can you add checking so then it will add n/a face (otherDifficultyIcon) if the difficulty is weird
  return (
    <ColouredBox className="grid grid-cols-2 justify-items-center border-2 border-solid">
      <p className="col-span-2">Difficulty</p>
      <img src={difficultyIcons[difficulty]} alt={difficulty} />
      <RelativeGuessIcon className="row-span-2" guess={guess} />
      <p>{difficulty}</p>
    </ColouredBox>
  );
}
