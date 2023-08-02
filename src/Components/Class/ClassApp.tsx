import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import "./styles/ClassApp.css";
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

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;

    const isOver = correctCount + incorrectCount === initialFishes.length;
    const totalCount = initialFishes.length;
    const fishIndex =
      correctCount + incorrectCount < 4
        ? correctCount + incorrectCount
        : totalCount - 1;
    const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
    const handleGuess = (guess: string) => {
      initialFishes[fishIndex].name === guess
        ? this.setState({ correctCount: correctCount + 1 })
        : this.setState({ incorrectCount: incorrectCount + 1 });
    };
    return (
      <>
        <div className={isOver ? "hidden" : ""}>
          <ClassScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <ClassGameBoard
            handleGuess={handleGuess}
            fishData={initialFishes[fishIndex]}
          />
        </div>
        {isOver && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
