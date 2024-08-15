import { useEffect, useState } from "react";

import ColoursResultView from "./ColoursResultView";
import DifficultyResultView from "./DifficultyResultView";
import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import StatsResultView from "./StatsResultView";
import { getLevelThumbnail } from "../logic/LevelImages";
import { nameToIdObj } from "../logic/AllLevels";

export default function GuessResultView({
  info,
  result,
}: {
  info: FullLevelInfo;
  result: GuessResult;
}) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | undefined>();
  useEffect(() => {
    (async () =>
      setThumbnailUrl(await getLevelThumbnail(nameToIdObj[info.name])))();
  }, [info.name]);
  return (
    <div className="grid aspect-[3] w-2/3 grid-cols-4 grid-rows-[1fr_1fr_5fr] place-items-center border border-black p-2">
      <img className="row-span-3" src={thumbnailUrl} alt={info.name} />
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
