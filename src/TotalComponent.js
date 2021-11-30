import React, { Component } from "react";

export default class TotalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Total Count : {this.props.val}</h4>
      </div>
    );
  }
}
