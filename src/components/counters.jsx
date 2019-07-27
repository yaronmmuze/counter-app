import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete} //pass reference to function handleDelete
            onIncrement={onIncrement}
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
