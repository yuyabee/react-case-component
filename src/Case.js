import React, { Component, PropTypes, } from 'react';

const childContextTypes = {
  value: PropTypes.any.isRequired,
};

const propTypes = {
  value: PropTypes.any.isRequired,
};

class Case extends Component {
  getChildContext() {
    return {
      value: this.props.value,
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Case.childContextTypes = childContextTypes;
Case.propTypes = propTypes;

export default Case;
