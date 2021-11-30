import { Component } from "react";
import TotalComponent from "./TotalComponent";
class CopyCountercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.value,
    };
  }
  //   inc = () => {
  //     this.setState({ val: this.props.onIncrementand(this.state.val) });
  //   };
  //   dec = () => {
  //     this.setState({ val: this.props.onDecrement(this.state.val) });
  //   };
  handleClick = (type, val) => {
    let res = this.props.onChangecallback(type, val);
    console.log({ res });
    this.setState({ val: res });
  };
  render() {
    return (
      <div className=" ques counter">
        {/* <b>{this.state.val}</b> */}
        <TotalComponent val={this.state.val} />

        <div className=" counter_controls">
          <button
            onClick={() => this.handleClick("DEC", this.state.val)}
            className="button is-danger is-small"
          >
            -
          </button>

          <button
            onClick={() => this.handleClick("INC", this.state.val)}
            className="button is-success is-small"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CopyCountercomponent;
