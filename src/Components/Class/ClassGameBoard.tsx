import { Component } from "react";
import "./styles/game-board.css";
import { fishItem } from "../../types";

export class ClassGameBoard extends Component<{
  handleGuess: (guess: string) => void;
  fishData: fishItem;
}> {
  state = {
    fishGuess: "",
  };
  render() {
    const { handleGuess, fishData } = this.props;
    const { fishGuess } = this.state;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGuess(fishGuess);
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
