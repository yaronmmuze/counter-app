import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    //update the state (we are not going to remove the counter from the array in the 'state')
    //we will define new const
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete} //pass reference to function handleDelete
            // value={counter.value}
            // id={counter.id}
            counter={counter} // encaps. contains the two above fields and more field that may be added during dev
          />
        ))}
      </div>
    );
  }
}

export default Counters;
