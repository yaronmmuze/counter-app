import React, { Component } from "react";

class Counter extends Component {
  // life cycle hook
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("ajax call and get new data from the server");
    }
  }

  componentWillUnmount() {
    // as a result of deleting a counter -> the state of app component is changed
    // the entire component tree is re-rendered -> new virtual DOM with one less counter
    console.log("counter - unmount");
    // clean up before this removed from the DOM
  }
  render() {
    // console.log("props", this.props);
    console.log("counter - rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={() => this.handleIncrement(product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
