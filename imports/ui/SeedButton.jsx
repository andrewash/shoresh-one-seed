import React, { Component, PropTypes } from 'react';

export default class SeedButton extends Component {
  newPlanting(event) {
    event.preventDefault();
    this.props.submitHandler(this.props.varietalId);
  }

  render() {
    return (
      <div className="seed-button">
        <button id={this.props.varietalId} onClick={this.newPlanting.bind(this)}>{this.props.name}</button>
      </div>
    );
  }
}

SeedButton.propTypes = {
  varietalId: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  submitHandler: PropTypes.func
};
