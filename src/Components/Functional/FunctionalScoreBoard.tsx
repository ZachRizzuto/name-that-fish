import "./styles/score-board.css";
import { answersLeft } from "./FunctionalFishData.ts";
//  Where the score is presented

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
}: {
  incorrectCount: number;
  correctCount: number;
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
