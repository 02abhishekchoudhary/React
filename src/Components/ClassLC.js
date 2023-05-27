import React, { Component } from "react";

export class ClassLC extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      count: 1,
    };
  }

  // It will called before the render method. Only renders one time.
  componentWillMount() {
    console.log("Component will mount");
    this.setState({
      count: this.state.count + 1,
    });
  }

  // It will called after the render method. Only renders one time.
  componentDidMount() {
    console.log("Component didMount called");
  }

  // It will called before the redner method after updating. It will called again after again if the component keeps rendering.
  componentWillUpdate() {
    console.log("Component willUpdate called");
  }

  // It will called after the redner method after updating. It will called again after again if the component keeps rendering.
  componentDidUpdate() {
    console.log("Component didUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  onIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("render called");
    return (
      <div>
        ClassLC
        <h3>{this.state.count}</h3>
        <div>
          <button onClick={() => this.onIncrement()}>Inc</button>
        </div>
      </div>
    );
  }
}

export default ClassLC;
