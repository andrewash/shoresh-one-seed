import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Varietals } from '../../api/varietals.js';
import { Plantings } from '../../api/plantings.js';

import SeedButton from '../../ui/SeedButton.jsx';

// App component - represents the whole app
let myCounter;
class Counter extends Component {
  constructor(props) {
    super(props);

    myCounter = this;
  }

  renderVarietals() {
    return this.props.varietals.map((varietal) => (
      <SeedButton key={varietal._id} varietalId={varietal._id} name={varietal.name} imageUrl={varietal.imageUrl} submitHandler={this.handleSubmit} />
    ));
  }

  handleSubmit(varietalId) {
    const volunteerName = ReactDOM.findDOMNode(myCounter.refs.volunteerNameInput).value.trim();
    Meteor.call('plantings.insert', volunteerName, varietalId);

    // Clear form
    ReactDOM.findDOMNode(myCounter.refs.volunteerNameInput).value = '';
  }

  handleUndo() {
    Meteor.call('plantings.undo');
  }

  render() {
    if (this.props.varietals !== undefined) {
      return (
        <div className="container">
          <form className="new-planting" onSubmit={this.handleSubmit.bind(this)} >
            <label>Volunteer:</label>
            <input
              type="text"
              ref="volunteerNameInput"
              placeholder="Type their name"
            />
            <h1>Choose One</h1>
            { this.renderVarietals() }
          </form>
          <button onClick={this.handleUndo.bind(this)}>Undo</button>
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
  Meteor.subscribe('varietals');
  return {
    varietals: Varietals.find({}, { sort: { "_id": 1 } }).fetch()
  };
}, Counter);
