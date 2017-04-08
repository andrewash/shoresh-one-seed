import React, { Component, PropTypes } from 'react';

export default class SeedButton extends Component {
  newPlanting() {
    Meteor.call('plantings.insert', this.props.volunteerName, this.props.varietalId);
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
  volunteerName: PropTypes.string,
  varietalId: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string
};
