import "./styles/game-board.css";
import { useState } from "react";
import { fishItem } from "../../types.ts";

export function FunctionalGameBoard({
  handleGuess,
  fishData,
}: {
  handleGuess: (guess: string) => void;
  fishData: fishItem;
}) {
  const [fishGuess, setFishGuess] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(fishGuess);
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
