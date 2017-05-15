import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
export default class LastPlanting extends Component {
  render() {
    return (
      <div className="last-planting">
        <h1>Way to go!</h1>
        <div className="varietal">You planted a {this.props.varietal} Seed</div>
        <img className="illustration" src={this.props.imageUrl} />

        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

LastPlanting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  varietal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
