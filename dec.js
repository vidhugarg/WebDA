import React, { Component } from 'react';

class DecrementCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Decrement Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default DecrementCounter;
