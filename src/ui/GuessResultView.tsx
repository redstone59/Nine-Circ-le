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
    <div className="grid aspect-[3] w-2/3 grid-cols-3 grid-rows-[1fr_1fr_5fr] place-items-center border border-black p-2">
      <p className="col-span-3 text-5xl">{info.name}</p>
      <p className="col-span-3 text-3xl">{info.creators.join(", ")}</p>
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
