import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import "./styles/FunctionalApp.css";
import { Images } from "../../assets/Images";

const initialFishes = [
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

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const isOver = correctCount + incorrectCount === initialFishes.length;
  const totalCount = initialFishes.length;
  const fishIndex =
    correctCount + incorrectCount < 4
      ? correctCount + incorrectCount
      : totalCount - 1;
  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
  const handleGuess = (guess: string) => {
    initialFishes[fishIndex].name === guess
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };
  return (
    <>
      <div className={isOver ? "hidden" : ""}>
        <FunctionalScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          answersLeft={answersLeft}
        />
        <FunctionalGameBoard
          handleGuess={handleGuess}
          fishData={initialFishes[fishIndex]}
        />
      </div>
      {isOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      )}
    </>
  );
}
