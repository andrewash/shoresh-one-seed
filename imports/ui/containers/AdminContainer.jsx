import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Varietals } from '../../api/varietals.js';
import { Plantings } from '../../api/plantings.js';

import SeedButton from '../../ui/SeedButton.jsx';

// App component - represents the whole app
class Counter extends Component {
  renderVarietals() {
    return this.props.varietals.map((varietal) => (
      <SeedButton key={varietal._id} name={varietal.name} imageUrl={varietal.imageUrl} />
    ));
  }

  render() {
    if (this.props.varietals !== undefined) {
      return (
        <div className="container">
          <h1>Choose One</h1>
          { this.renderVarietals() }
        </div>
      );
    } else {
      return (
        <div className="container">
          Loading...
        </div>
      )
    }
  }
}

Counter.propTypes = {
  varietals: PropTypes.array
};

export default createContainer(() => {
  // Show only the most recent planting
  return {
    varietals: Varietals.find({}, { sort: { "_id": 1 } }).fetch()
  };
}, Counter);
