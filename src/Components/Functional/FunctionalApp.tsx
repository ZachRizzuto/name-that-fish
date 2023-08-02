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
  const isOver = initialFishes.length === incorrectCount + correctCount;
  return (
    <>
      <div className={isOver ? "hidden" : ""}>
        <FunctionalScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
        <FunctionalGameBoard
          handleGuess={(answer, guess) =>
            answer === guess
              ? setCorrectCount(correctCount + 1)
              : setIncorrectCount(incorrectCount + 1)
          }
          incorrectCount={incorrectCount}
          correctCount={correctCount}
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
