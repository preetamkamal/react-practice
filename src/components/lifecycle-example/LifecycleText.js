import React, { Component } from "react";

export default class LifecycleText extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor : 6");
  }
  componentDidMount() {
    console.log("ComponentDidMount : 9");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate : 12");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount : 15");
  }
  render() {
    console.log("Render : 18");
    return <div>{this.props.data}</div>;
  }
}
