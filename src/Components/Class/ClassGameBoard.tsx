import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./ClassApp";

export class ClassGameBoard extends Component<{
  handleGuess: (answer: string, guess: string) => void;
  correctCount: number;
  incorrectCount: number;
}> {
  state = {
    fishGuess: "",
  };
  render() {
    const { handleGuess, correctCount, incorrectCount } = this.props;
    const { fishGuess } = this.state;
    const fishIndex = correctCount + incorrectCount;
    const nextFishToName =
      initialFishes[fishIndex < 4 ? fishIndex : fishIndex - 1];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGuess(nextFishToName.name, fishGuess);
            this.setState({ fishGuess: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={fishGuess}
            onChange={(e) => {
              this.setState({ fishGuess: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
