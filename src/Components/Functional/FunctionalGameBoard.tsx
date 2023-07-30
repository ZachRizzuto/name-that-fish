import "./styles/game-board.css";
import { useState } from "react";
import { answersLeft } from "./FunctionalFishData.ts";
import { Images } from "../../assets/Images.ts";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];


export function FunctionalGameBoard({
  handleScoreC,
  handleScoreI,
}: {
  handleScoreC: () => void;
  handleScoreI: () => void;
}) {
  const [fishIndex, setFishIndex] = useState(0);
  const [fishGuess, setFishGuess] = useState("");
  const nextFishToName = initialFishes[fishIndex];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          fishGuess === nextFishToName.name ? handleScoreC() : handleScoreI();
          setFishGuess("");
          if (fishIndex + 1 <= initialFishes.length - 1) {
            setFishIndex(fishIndex + 1);
          }
          answersLeft.shift();
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
