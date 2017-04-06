import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
export default class LastPlanting extends Component {
  render() {
    return (
      <div className="last-planting">
        <h1>{this.props.volunteer} planted:</h1>
        <img className="illustration" src={this.props.imageUrl} />
        <div className="varietal">{this.props.varietal}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

LastPlanting.propTypes = {
  volunteer: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  varietal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
