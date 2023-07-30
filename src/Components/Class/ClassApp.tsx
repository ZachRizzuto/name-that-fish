import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { answersLeft } from "./ClassFishData";
import "./styles/ClassApp.css";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const isOver = answersLeft.length === 0;
    return (
      <>
        <div className={isOver ? "hidden" : ""}>
          <ClassScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <ClassGameBoard
            handleScoreC={() =>
              this.setState({ correctCount: correctCount + 1 })
            }
            handleScoreI={() =>
              this.setState({ incorrectCount: incorrectCount + 1 })
            }
          />
        </div>
        {isOver && (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
      </>
    );
  }
}
