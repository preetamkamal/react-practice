import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    val: 12,
    notVal: "nothing",
    notNotVal: "asfds",
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return { notVal: prevState.val + "abc" };
    });
  };
  handleNotNotVal = () => {
    this.setState((prevState) => {
      return { notNotVal: "random" + 1 };
    });
    setTimeout(2000);
  };
  handleAlphabet = () => {
    this.setState((prevState) => {
      return { notVal: prevState.val + "abc" };
    });
  };

  render() {
    return (
      <div>
        <h1>This is a number: {this.state.val}</h1>
        <h1>This is a number: {this.state.notVal}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}
