import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  // state = {  }
  render() {
    return (
      <dev>
        <span className="badge badge-primary m-2"> {this.formatCount()}</span>{" "}
        <button>Increment</button>
      </dev>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
