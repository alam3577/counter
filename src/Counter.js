import { Component } from "react";
import TotalComponent from "./TotalComponent";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.value,
    };
  }
  inc = () => {
    this.setState({ val: this.props.onIncrementand(this.state.val) });
  };
  dec = () => {
    this.setState({ val: this.props.onDecrement(this.state.val) });
  };
  render() {
    return (
      <div className=" ques counter">
        {/* <b>{this.state.val}</b> */}
        <TotalComponent val={this.state.val} />

        <div className=" counter_controls">
          <button onClick={this.dec} className="button is-danger is-small">
            -
          </button>

          <button onClick={this.inc} className="button is-success is-small">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
