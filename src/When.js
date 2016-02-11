import React, { Component, PropTypes, } from 'react';

const contextTypes = {
  value: PropTypes.any.isRequired,
};

const propTypes = {
  value: PropTypes.any.isRequired,
};

class When extends Component {
  render() {
    return (this.props.value == this.context.value) ? this.props.children : null;
  }
}

When.contextTypes = contextTypes;
When.propTypes = propTypes;

export default When;
