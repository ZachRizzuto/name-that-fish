import { Component } from "react";
import "./styles/score-board.css";
import { answersLeft } from "./ClassFishData";

export class ClassScoreBoard extends Component<{
  correctCount: number;
  incorrectCount: number;
}> {

  render() {
    const { correctCount, incorrectCount } = this.props;
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
