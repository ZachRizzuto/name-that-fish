import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { answersLeft } from "./ClassFishData";

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


export class ClassGameBoard extends Component<{
  handleScoreC: () => void;
  handleScoreI: () => void;
}> {
  state = {
    fishIndex: 0,
    fishGuess: "",
  };
  render() {
    const { fishIndex, fishGuess } = this.state;
    const { handleScoreC, handleScoreI } = this.props;
    const nextFishToName = initialFishes[fishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (nextFishToName.name === fishGuess) {
              handleScoreC();
            } else {
              handleScoreI();
            }
            this.setState({ fishGuess: "" });
            if (fishIndex + 1 <= initialFishes.length - 1) {
              this.setState({ fishIndex: fishIndex + 1 });
            }
            answersLeft.shift();
          }}
        >
          <div></div>
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
