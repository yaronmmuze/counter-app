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

  handleDelete = counter_id => {
    console.log("Event Handler Called", counter_id);
    //update the state (we are not going to remove the counter from the array in the 'state')
    //we will define new const
    const counters = this.state.counters.filter(c => c.id !== counter_id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete} //pass reference to function handleDelete
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
