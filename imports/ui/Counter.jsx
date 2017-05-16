import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h1>{this.props.count} Seedlings<br/>by JEDX</h1>
        <img className="power-of-one-seed" src="power-of-one-seed.png" />
        <img className="logo" src="logo-rectangle.png" />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string)
};