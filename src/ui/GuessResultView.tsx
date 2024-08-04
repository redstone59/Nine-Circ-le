import ColoursResultView from "./ColoursResultView";
import DifficultyResultView from "./DifficultyResultView";
import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import StatsResultView from "./StatsResultview";

export default function GuessResultView({
  info,
  result,
}: {
  info: FullLevelInfo;
  result: GuessResult;
}) {
  return (
    <div className="grid grid-cols-3">
      <p className="col-span-3">{info.name}</p>
      <p className="col-span-3">{info.creators.join(", ")}</p>
      <DifficultyResultView
        guess={result.difficulty}
        difficulty={info.difficulty}
      />
      <ColoursResultView
        colours={info.colourScheme}
        coloursResult={result.colourScheme}
      />
      <StatsResultView info={info} result={result} />
    </div>
  );
}
