import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h1>{this.props.count} seedlings by JEDX</h1>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string)
};