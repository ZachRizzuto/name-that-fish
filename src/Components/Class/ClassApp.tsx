import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import "./styles/ClassApp.css";
import { Images } from "../../assets/Images";

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

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const isOver = correctCount + incorrectCount === initialFishes.length;
    const fishIndex = correctCount + incorrectCount;
    return (
      <>
        <div className={isOver ? "hidden" : ""}>
          <ClassScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishIndex={fishIndex}
          />
          <ClassGameBoard
            handleGuess={(answer, guess) =>
              answer === guess
                ? this.setState({ correctCount: correctCount + 1 })
                : this.setState({ incorrectCount: incorrectCount + 1 })
            }
            fishIndex={fishIndex}
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
