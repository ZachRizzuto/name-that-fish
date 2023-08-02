import "./styles/game-board.css";
import { useState } from "react";
import { initialFishes } from "../Class/ClassApp.tsx";

export function FunctionalGameBoard({
  handleGuess,
  fishIndex,
}: {
  handleGuess: (answer: string, guess: string) => void;
  fishIndex: number;
}) {
  const [fishGuess, setFishGuess] = useState("");
  const nextFishToName =
    initialFishes[fishIndex < 4 ? fishIndex : fishIndex - 1];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(nextFishToName.name, fishGuess);
          setFishGuess("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={(e) => setFishGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
