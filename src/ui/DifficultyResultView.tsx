import { Difficulty, Rating } from "../logic/NineCirclesLevel";

import ColouredBox from "./ColouredBox";
import Icon from "./Icon";
import { RelativeGuess } from "../logic/Guess";
import { RelativeGuessIcon } from "./RelativeGuessIcon";
import autoIcon from "../assets/difficulties/auto.png";
import easyDemonIcon from "../assets/difficulties/demon easy.png";
import easyIcon from "../assets/difficulties/easy.png";
import epicIcon from "../assets/ratings/epic.png";
import extremeDemonIcon from "../assets/difficulties/demon extreme.png";
import featureIcon from "../assets/ratings/featured.png";
import hardDemonIcon from "../assets/difficulties/demon hard.png";
import hardIcon from "../assets/difficulties/hard.png";
import harderIcon from "../assets/difficulties/harder.png";
import insaneDemonIcon from "../assets/difficulties/demon insane.png";
import insaneIcon from "../assets/difficulties/insane.png";
import legendaryIcon from "../assets/ratings/legendary.png";
import mediumDemonIcon from "../assets/difficulties/demon medium.png";
import mythicIcon from "../assets/ratings/mythic.png";
import normalIcon from "../assets/difficulties/normal.png";
import otherDifficultyIcon from "../assets/difficulties/na.png";
import rateIcon from "../assets/ratings/rate.png";

const difficultyIcons: { [Key in Difficulty]: string } = {
  Auto: autoIcon,
  Easy: easyIcon,
  Normal: normalIcon,
  Hard: hardIcon,
  Harder: harderIcon,
  Insane: insaneIcon,
  "Easy Demon": easyDemonIcon,
  "Medium Demon": mediumDemonIcon,
  "Hard Demon": hardDemonIcon,
  "Insane Demon": insaneDemonIcon,
  "Extreme Demon": extremeDemonIcon,
};
const ratingIcons: { [Key in Rating]: string } = {
  Rate: rateIcon,
  Feature: featureIcon,
  Epic: epicIcon,
  Legendary: legendaryIcon,
  Mythic: mythicIcon,
};

export default function DifficultyResultView({
  guess,
  difficulty,
  rating,
}: {
  guess: RelativeGuess;
  difficulty: Difficulty;
  rating: Rating;
}) {
  return (
    <ColouredBox className="place-item-center grid grid-cols-2 justify-items-center border-2 border-solid">
      <p className="col-span-2">Difficulty</p>
      <Icon
        src={difficultyIcons[difficulty] ?? otherDifficultyIcon}
        alt={difficulty}
        backgroundSrc={ratingIcons[rating]}
      />
      <RelativeGuessIcon className="row-span-2" guess={guess} />
      <p>{difficulty}</p>
    </ColouredBox>
  );
}
