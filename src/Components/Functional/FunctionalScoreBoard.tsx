import { initialFishes } from "../Class/ClassApp";
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
}: {
  incorrectCount: number;
  correctCount: number;
}) {
  const fishIndex = incorrectCount + correctCount;
  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
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
