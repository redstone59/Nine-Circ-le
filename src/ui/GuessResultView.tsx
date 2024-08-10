import ColoursResultView from "./ColoursResultView";
import DifficultyResultView from "./DifficultyResultView";
import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import StatsResultView from "./StatsResultView";

export default function GuessResultView({
  info,
  result,
}: {
  info: FullLevelInfo;
  result: GuessResult;
}) {
  return (
    <div className="m-auto grid aspect-[3] w-2/3 grid-cols-3 grid-rows-[1fr_1fr_3fr] place-items-center border border-black">
      <p className="col-span-3">{info.name}</p>
      <p className="col-span-3">{info.creators.join(", ")}</p>
      <DifficultyResultView
        guess={result.difficulty}
        difficulty={info.difficulty}
        rating={info.ratingType}
      />
      <ColoursResultView
        colours={info.colourScheme}
        coloursResult={result.colourScheme}
      />
      <StatsResultView info={info} result={result} />
    </div>
  );
}
