import React, { Component, PropTypes, } from 'react';

class When extends Component {
  render() {
    return (this.props.when == this.context.value) ? this.props.children : null;
  }
}

When.contextTypes = {
  value: PropTypes.any.isRequired,
}

export default When;
