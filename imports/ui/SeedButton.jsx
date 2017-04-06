import React, { Component, PropTypes } from 'react';

export default class SeedButton extends Component {
  render() {
    return (
      <div className="seed-button">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

SeedButton.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string
};
