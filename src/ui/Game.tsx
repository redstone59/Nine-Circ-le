import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

import { FullLevelInfo } from "../logic/NineCirclesLevel";
import { GuessResult } from "../logic/Guess";
import GuessResultView from "./GuessResultView";
import { NineCircle } from "../logic/NineCircle";
import { allLevels } from "../logic/AllLevels";
import { downloadedAPIInfo } from "../logic/FakeAPIInformation";
import { idToReadable } from "../logic/ReadableLevel";
import { useState } from "react";

const game = new NineCircle();

export default function Game() {
  const [nameQuery, setNameQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [guesses, setGuesses] = useState<[string, GuessResult][]>([]);

  const fullLevelInfos: { [id: string]: FullLevelInfo } = Object.fromEntries(
    Object.keys(allLevels).map((id) => [
      id,
      { ...allLevels[id], ...downloadedAPIInfo[id] },
    ]),
  );
  const levelIds = Object.keys(allLevels);
  const filteredLevelEntries: [string, FullLevelInfo][] =
    nameQuery === ""
      ? []
      : levelIds
          .filter((id) =>
            downloadedAPIInfo[id].name
              .toLowerCase()
              .startsWith(nameQuery.toLowerCase()),
          )
          .map((id) => [id, fullLevelInfos[id]]);
  const filteredLevels = Object.fromEntries(filteredLevelEntries);
  console.log(filteredLevels);

  function submit() {
    (async () => {
      if (!selectedId || guesses.some((g) => g[0] === selectedId)) {
        return;
      }
      const guessResult = await game.guessReadableLevel(
        idToReadable[selectedId],
      );
      setGuesses([[selectedId, guessResult], ...guesses]);
    })();
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Combobox value={selectedId} onChange={setSelectedId}>
          <ComboboxInput<string>
            onChange={(e) => setNameQuery(e.target.value)}
            displayValue={(id) => filteredLevels[id]?.name}
          />
          <ComboboxOptions className="empty:invisible">
            {filteredLevelEntries.map(([id, l]) => (
              <ComboboxOption
                key={id}
                value={id}
                className="data-[focus]:bg-red-100"
              >
                {l.name} ({l.creators[0]})
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
        <button type="submit">Submit</button>
      </form>
      {guesses.map((g) => (
        <GuessResultView key={g[0]} info={fullLevelInfos[g[0]]} result={g[1]} />
      ))}
    </div>
  );
}
