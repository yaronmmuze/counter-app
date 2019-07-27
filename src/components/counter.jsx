import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [] //["tag1", "tag2", "tag3"]
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); //return instance of the new hadnleIncrement
  //   }

  handleIncrement = product => {
    // arrow function inherit 'this'
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <dev>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={() => this.handleIncrement(product)}
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </dev>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
