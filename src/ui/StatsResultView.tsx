import ColouredBox from "./ColouredBox";
import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import Icon from "./Icon";
import { RelativeGuess } from "../logic/Guess";
import { RelativeGuessIcon } from "./RelativeGuessIcon";
import downloadIcon from "../assets/game icons/download.png";
import lengthIcon from "../assets/game icons/length.png";
import likeIcon from "../assets/game icons/like.png";

function StatResultView({
  icon,
  text,
  guess,
}: {
  icon: React.ReactNode;
  text: string;
  guess: RelativeGuess;
}) {
  return (
    <div className="flex items-center justify-between gap-1">
      {icon}
      <p>{text}</p>
      <RelativeGuessIcon guess={guess} />
    </div>
  );
}

export default function StatsResultView({
  info,
  result,
}: {
  info: FullLevelInfo;
  result: GuessResult;
}) {
  return (
    <ColouredBox className="flex flex-col">
      <StatResultView
        icon={<p>Obj</p>}
        text={info.objectCount.toString()}
        guess={result.objectCount}
      />
      <StatResultView
        icon={<Icon src={lengthIcon} alt="Length" />}
        text={info.length}
        guess={result.length}
      />
      <StatResultView
        icon={<Icon src={downloadIcon} alt="Downloads" />}
        text={info.downloads.toString()}
        guess={result.downloads}
      />
      <StatResultView
        icon={<Icon src={likeIcon} alt="Likes" />}
        text={info.likes.toString()}
        guess={result.likes}
      />
    </ColouredBox>
  );
}
