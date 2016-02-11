import React, { Component, } from 'react';
import { Case, When, } from 'react-condition';

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
      <Case value={this.state.value}>
        <When when={1}>
          <h3>Hello from 1</h3>
        </When>
        <When when={2}>
          <h3>Hello from 2</h3>
        </When>
        <When when={3}>
          <h3>Hello from 3</h3>
        </When>
      </Case>
    );
  }
}
