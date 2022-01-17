import React, { Component } from "react";
import LifecycleText from "./LifecycleText";

class Lifecycle extends Component {
  state = {
    showChild: true,
    text: "",
  };

  onHandleShow = () => {
    this.setState((prevState) => ({ showChild: !prevState.showChild }));
  };

  onHandleText = () => {
    this.setState((prevState) => ({ text: prevState.text + "_new_data" }));
  };

  render() {
    return (
      <div>
        <button onClick={this.onHandleShow}>Change lifecycle state</button>
        <button onClick={this.onHandleText}>Add text</button>
        {this.state.showChild ? <LifecycleText data={this.state.text} /> : null}
      </div>
    );
  }
}

export default Lifecycle;
