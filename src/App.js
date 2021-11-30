import { Component } from "react";
import CopyCountercomponent from "./CopyCountercomponent";
// import Counter from "./Counter";
const data = [
  { id: 1, value: 0 },

  { id: 2, value: 0 },

  { id: 3, value: 0 },
  { id: 4, value: 0 },
];
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      myData: data,
    };
  }

  // onIncrementand = (value) => {
  //   console.log({ Inc: value });
  //   return value + 1;
  // };

  // onDecrement = (value) => {
  //   console.log({ Dec: value });
  //   return value - 1;
  // };
  onChangecallback = (type, val) => {
    console.log({ type, val });
    switch (type) {
      case "INC":
        return val + 1;
      case "DEC":
        return val - 1;

      default:
        return 0;
    }
  };
  render() {
    return (
      <div>
        <h1>Welcome To The Counter App</h1>
        {data.map((counter) => (
          /* <Counter
            onIncrementand={this.onIncrementand}
            onDecrement={this.onDecrement}
            key={counter.id}
            value={counter.value}
          /> */
          <CopyCountercomponent
            key={counter.id}
            value={counter.value}
            onChangecallback={this.onChangecallback}
          />
        ))}
      </div>
    );
  }
}

export default App;
