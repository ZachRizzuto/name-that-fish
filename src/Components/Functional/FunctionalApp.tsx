import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { answersLeft } from "./FunctionalFishData";
import { useState } from "react";
import "./styles/FunctionalApp.css";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const isOver = answersLeft.length === 0;
  return (
    <>
      <div className={isOver ? "hidden" : ""}>
        <FunctionalScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
        <FunctionalGameBoard
          handleScoreC={() => setCorrectCount(correctCount + 1)}
          handleScoreI={() => setIncorrectCount(incorrectCount + 1)}
        />
      </div>
      {isOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
    </>
  );
}
