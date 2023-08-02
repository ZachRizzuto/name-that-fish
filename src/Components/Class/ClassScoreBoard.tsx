import { Component } from "react";
import "./styles/score-board.css";
import { initialFishes } from "./ClassApp";

export class ClassScoreBoard extends Component<{
  correctCount: number;
  incorrectCount: number;
}> {
  render() {
    const { correctCount, incorrectCount } = this.props;
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
}
