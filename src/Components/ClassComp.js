import React, { Component } from "react";

export class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      // name: "Sam",
      // age:20
      count: 0,
      count2: 1,
    };
  }

  // onNameChange() {
  //   this.setState({
  //     name: "Tom",
  //   })
  // }

  // onAgeChange() {
  //   this.setState({
  //     age:30
  //   })
  // }

  onIncrement(count) {
    this.setState({
      count: this.state.count + count,
    });
  }

  onDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  onReset() {
    this.setState({
      count: 0,
    });
  }

  onIncrement2(count) {
    this.setState({
      count2: this.state.count2 + 1,
    });
  }

  render() {
    console.log("render", this.state);
    return (
      <div>
        <h1>Class Base Component in Recat JS</h1>

        {/* <h5>{this.state.name}</h5>
        <h5>{this.state.age}</h5>
        <button onClick={() => this.onNameChange()}>Change Name</button>
        <button onClick={() => this.onAgeChange()}>Change Age</button> */}

        <h3>{this.state.count}</h3>
        <h3>{this.state.count2}</h3>
        <button onClick={() => this.onIncrement(5)}>Increment</button>
        <button onClick={() => this.onDecrement()}>Decrement</button>
        <button onClick={() => this.onReset()}>Reset</button>
        <div>
          <button onClick={() => this.onIncrement2()}>Increment2</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
